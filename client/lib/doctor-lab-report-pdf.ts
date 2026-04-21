import { jsPDF } from "jspdf"

export type DoctorLabReportPdfItem = {
  id: string
  patientName: string
  title: string
  status: string
  summary?: string | null
  resultNotes?: string | null
  createdAt?: string | null
  orderedOn?: string | null
  reviewedAt?: string | null
  fileUrls?: string[] | null
}

type LabReportPdfOptions = {
  doctorName?: string
  title?: string
}

const safeValue = (
  value: string | null | undefined,
  fallback = "Not available",
) => {
  const normalized = value?.trim()
  return normalized ? normalized : fallback
}

const formatDateTime = (value: string | null | undefined) => {
  if (!value) return "Not available"

  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return "Invalid date"

  return date.toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  })
}

const formatStatus = (value: string) =>
  safeValue(value, "Pending Review")
    .toLowerCase()
    .replaceAll("_", " ")
    .replace(/\b\w/g, (character) => character.toUpperCase())

function drawWrappedBlock(
  doc: jsPDF,
  label: string,
  content: string,
  x: number,
  y: number,
  width: number,
) {
  doc.setDrawColor(226, 232, 240)
  doc.setFillColor(248, 250, 252)
  doc.rect(x, y, width, 8, "FD")
  doc.setFont("helvetica", "bold")
  doc.setFontSize(10)
  doc.setTextColor(15, 23, 42)
  doc.text(label, x + 3, y + 5.2)

  const lines = doc.splitTextToSize(content, width - 6)
  const height = Math.max(20, lines.length * 5 + 8)

  doc.rect(x, y + 8, width, height, "S")
  doc.setFont("helvetica", "normal")
  doc.setFontSize(10)
  doc.setTextColor(51, 65, 85)
  doc.text(lines, x + 3, y + 13)

  return y + 8 + height
}

export function createLabReportsPdfBlob(
  reports: DoctorLabReportPdfItem[],
  options: LabReportPdfOptions = {},
) {
  const doc = new jsPDF({ unit: "mm", format: "a4" })
  const pageWidth = doc.internal.pageSize.getWidth()
  const pageHeight = doc.internal.pageSize.getHeight()
  const margin = 14
  const contentWidth = pageWidth - margin * 2

  reports.forEach((report, index) => {
    if (index > 0) {
      doc.addPage()
    }

    const reportedOn = formatDateTime(report.orderedOn ?? report.createdAt)
    const reviewedOn = formatDateTime(report.reviewedAt)
    const attachments =
      report.fileUrls?.length
        ? report.fileUrls.map((fileUrl, fileIndex) => `${fileIndex + 1}. ${fileUrl}`)
        : ["No attachments linked to this report."]

    doc.setFillColor(15, 23, 42)
    doc.rect(0, 0, pageWidth, 30, "F")
    doc.setTextColor(255, 255, 255)
    doc.setFont("helvetica", "bold")
    doc.setFontSize(18)
    doc.text(options.title ?? "Medical Lab Report", margin, 13)
    doc.setFont("helvetica", "normal")
    doc.setFontSize(10)
    doc.text(
      `Prepared for clinical review${options.doctorName ? ` | ${options.doctorName}` : ""}`,
      margin,
      20,
    )
    doc.text(`Generated ${formatDateTime(new Date().toISOString())}`, margin, 25)

    let y = 40
    const rightColumnX = margin + contentWidth / 2

    doc.setFont("helvetica", "bold")
    doc.setFontSize(10)
    doc.setTextColor(15, 23, 42)
    doc.text("Patient Name", margin, y)
    doc.text("Report ID", rightColumnX, y)
    doc.setFont("helvetica", "normal")
    doc.setTextColor(51, 65, 85)
    doc.text(safeValue(report.patientName), margin, y + 6)
    doc.text(safeValue(report.id), rightColumnX, y + 6)

    y += 16
    doc.setFont("helvetica", "bold")
    doc.setTextColor(15, 23, 42)
    doc.text("Test / Report Title", margin, y)
    doc.text("Current Status", rightColumnX, y)
    doc.setFont("helvetica", "normal")
    doc.setTextColor(51, 65, 85)
    doc.text(safeValue(report.title), margin, y + 6)
    doc.text(formatStatus(report.status), rightColumnX, y + 6)

    y += 16
    doc.setFont("helvetica", "bold")
    doc.setTextColor(15, 23, 42)
    doc.text("Reported On", margin, y)
    doc.text("Reviewed On", rightColumnX, y)
    doc.setFont("helvetica", "normal")
    doc.setTextColor(51, 65, 85)
    doc.text(reportedOn, margin, y + 6)
    doc.text(reviewedOn, rightColumnX, y + 6)

    y += 18
    y = drawWrappedBlock(
      doc,
      "Clinical Summary",
      safeValue(report.summary, "No summary provided for this lab report."),
      margin,
      y,
      contentWidth,
    ) + 8
    y = drawWrappedBlock(
      doc,
      "Result Notes",
      safeValue(
        report.resultNotes,
        "No additional interpretation or follow-up note was recorded.",
      ),
      margin,
      y,
      contentWidth,
    ) + 8
    y = drawWrappedBlock(
      doc,
      "Linked Files",
      attachments.join("\n"),
      margin,
      y,
      contentWidth,
    )

    doc.setDrawColor(226, 232, 240)
    doc.line(margin, pageHeight - 18, pageWidth - margin, pageHeight - 18)
    doc.setFont("helvetica", "normal")
    doc.setFontSize(9)
    doc.setTextColor(100, 116, 139)
    doc.text("Doctor Signature", margin, pageHeight - 11)
    doc.text(
      `Page ${index + 1} of ${reports.length}`,
      pageWidth - margin - doc.getTextWidth(`Page ${index + 1} of ${reports.length}`),
      pageHeight - 11,
    )
  })

  return doc.output("blob")
}

export function createLabReportsPdfPreviewUrl(
  reports: DoctorLabReportPdfItem[],
  options: LabReportPdfOptions = {},
) {
  return URL.createObjectURL(createLabReportsPdfBlob(reports, options))
}

export function downloadLabReportsPdf(
  reports: DoctorLabReportPdfItem[],
  filename: string,
  options: LabReportPdfOptions = {},
) {
  const url = URL.createObjectURL(createLabReportsPdfBlob(reports, options))
  const anchor = document.createElement("a")
  anchor.href = url
  anchor.download = filename
  anchor.click()
  setTimeout(() => URL.revokeObjectURL(url), 0)
}
