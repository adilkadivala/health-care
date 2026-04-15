import bcrypt from "bcryptjs";
import prisma from "../src/config/db";

async function ensureUsers() {
  const password = await bcrypt.hash("Pass@123", 10);

  const adminUser = await prisma.user.upsert({
    where: { email: "admin@healthcare.local" },
    update: {
      firstName: "Maya",
      lastName: "Collins",
      role: "ADMIN",
      phone: "+1-555-1001",
    },
    create: {
      email: "admin@healthcare.local",
      password,
      firstName: "Maya",
      lastName: "Collins",
      role: "ADMIN",
      phone: "+1-555-1001",
    },
  });

  const receptionistUser = await prisma.user.upsert({
    where: { email: "reception@healthcare.local" },
    update: {
      firstName: "Riya",
      lastName: "Kapoor",
      role: "RECEPTIONIST",
      phone: "+1-555-1002",
    },
    create: {
      email: "reception@healthcare.local",
      password,
      firstName: "Riya",
      lastName: "Kapoor",
      role: "RECEPTIONIST",
      phone: "+1-555-1002",
    },
  });

  const pharmacistUser = await prisma.user.upsert({
    where: { email: "pharmacy@healthcare.local" },
    update: {
      firstName: "Zara",
      lastName: "Malik",
      role: "PHARMACIST",
      phone: "+1-555-1003",
    },
    create: {
      email: "pharmacy@healthcare.local",
      password,
      firstName: "Zara",
      lastName: "Malik",
      role: "PHARMACIST",
      phone: "+1-555-1003",
    },
  });

  const doctorOneUser = await prisma.user.upsert({
    where: { email: "dr.jenkins@healthcare.local" },
    update: {
      firstName: "Sarah",
      lastName: "Jenkins",
      role: "DOCTOR",
      phone: "+1-555-1101",
    },
    create: {
      email: "dr.jenkins@healthcare.local",
      password,
      firstName: "Sarah",
      lastName: "Jenkins",
      role: "DOCTOR",
      phone: "+1-555-1101",
    },
  });

  const doctorTwoUser = await prisma.user.upsert({
    where: { email: "dr.fox@healthcare.local" },
    update: {
      firstName: "Robert",
      lastName: "Fox",
      role: "DOCTOR",
      phone: "+1-555-1102",
    },
    create: {
      email: "dr.fox@healthcare.local",
      password,
      firstName: "Robert",
      lastName: "Fox",
      role: "DOCTOR",
      phone: "+1-555-1102",
    },
  });

  const patientOneUser = await prisma.user.upsert({
    where: { email: "aarav@healthcare.local" },
    update: {
      firstName: "Aarav",
      lastName: "Sharma",
      role: "PATIENT",
      phone: "+1-555-1201",
    },
    create: {
      email: "aarav@healthcare.local",
      password,
      firstName: "Aarav",
      lastName: "Sharma",
      role: "PATIENT",
      phone: "+1-555-1201",
    },
  });

  const patientTwoUser = await prisma.user.upsert({
    where: { email: "neha@healthcare.local" },
    update: {
      firstName: "Neha",
      lastName: "Verma",
      role: "PATIENT",
      phone: "+1-555-1202",
    },
    create: {
      email: "neha@healthcare.local",
      password,
      firstName: "Neha",
      lastName: "Verma",
      role: "PATIENT",
      phone: "+1-555-1202",
    },
  });

  return {
    adminUser,
    receptionistUser,
    pharmacistUser,
    doctorOneUser,
    doctorTwoUser,
    patientOneUser,
    patientTwoUser,
  };
}

async function ensureProfiles(users: Awaited<ReturnType<typeof ensureUsers>>) {
  await prisma.admin.upsert({
    where: { userId: users.adminUser.id },
    update: {
      accessLevel: 3,
      preferences: {
        config: {
          supportEmail: "admin-support@healthcare.local",
          escalationChannel: "#admin-ops",
        },
      },
    },
    create: {
      userId: users.adminUser.id,
      accessLevel: 3,
      preferences: {
        config: {
          supportEmail: "admin-support@healthcare.local",
          escalationChannel: "#admin-ops",
        },
      },
    },
  });

  await prisma.receptionist.upsert({
    where: { userId: users.receptionistUser.id },
    update: {
      shiftHours: "08:00-16:00",
      deskNumber: "MAIN-01",
      preferences: {
        supportEmail: "reception-support@healthcare.local",
        requireIdScan: true,
      },
    },
    create: {
      userId: users.receptionistUser.id,
      shiftHours: "08:00-16:00",
      deskNumber: "MAIN-01",
      preferences: {
        supportEmail: "reception-support@healthcare.local",
        requireIdScan: true,
      },
    },
  });

  const pharmacist = await prisma.pharmacist.upsert({
    where: { userId: users.pharmacistUser.id },
    update: {
      licenseNumber: "PHARM-LIC-1001",
      preferences: {
        supportEmail: "pharmacy-support@healthcare.local",
        autoDispense: false,
      },
    },
    create: {
      userId: users.pharmacistUser.id,
      licenseNumber: "PHARM-LIC-1001",
      preferences: {
        supportEmail: "pharmacy-support@healthcare.local",
        autoDispense: false,
      },
    },
  });

  const doctorOne = await prisma.doctor.upsert({
    where: { userId: users.doctorOneUser.id },
    update: {
      specialization: "Cardiology",
      licenseNumber: "DOC-LIC-2001",
      department: "Cardiology",
      availability: { note: "Mon-Fri 9AM-4PM" },
    },
    create: {
      userId: users.doctorOneUser.id,
      specialization: "Cardiology",
      licenseNumber: "DOC-LIC-2001",
      department: "Cardiology",
      availability: { note: "Mon-Fri 9AM-4PM" },
    },
  });

  const doctorTwo = await prisma.doctor.upsert({
    where: { userId: users.doctorTwoUser.id },
    update: {
      specialization: "General Medicine",
      licenseNumber: "DOC-LIC-2002",
      department: "General Medicine",
      availability: { note: "Mon-Sat 10AM-6PM" },
    },
    create: {
      userId: users.doctorTwoUser.id,
      specialization: "General Medicine",
      licenseNumber: "DOC-LIC-2002",
      department: "General Medicine",
      availability: { note: "Mon-Sat 10AM-6PM" },
    },
  });

  const patientOne = await prisma.patient.upsert({
    where: { userId: users.patientOneUser.id },
    update: {
      dateOfBirth: new Date("1992-08-14"),
      bloodGroup: "O+",
      allergies: ["Penicillin"],
      address: "1540 Greenwood Ave, Austin, TX",
      medicalHistory: "Hypertension under medication",
      preferences: { appointmentReminders: true, labUpdates: true },
    },
    create: {
      userId: users.patientOneUser.id,
      dateOfBirth: new Date("1992-08-14"),
      bloodGroup: "O+",
      allergies: ["Penicillin"],
      address: "1540 Greenwood Ave, Austin, TX",
      medicalHistory: "Hypertension under medication",
      preferences: { appointmentReminders: true, labUpdates: true },
    },
  });

  const patientTwo = await prisma.patient.upsert({
    where: { userId: users.patientTwoUser.id },
    update: {
      dateOfBirth: new Date("1995-03-22"),
      bloodGroup: "A+",
      allergies: [],
      address: "220 Spring St, Dallas, TX",
      medicalHistory: "Thyroid follow-up",
      preferences: { appointmentReminders: true, labUpdates: true },
    },
    create: {
      userId: users.patientTwoUser.id,
      dateOfBirth: new Date("1995-03-22"),
      bloodGroup: "A+",
      allergies: [],
      address: "220 Spring St, Dallas, TX",
      medicalHistory: "Thyroid follow-up",
      preferences: { appointmentReminders: true, labUpdates: true },
    },
  });

  return { pharmacist, doctorOne, doctorTwo, patientOne, patientTwo };
}

async function ensureClinicalData(profiles: Awaited<ReturnType<typeof ensureProfiles>>) {
  if ((await prisma.medication.count()) === 0) {
    await prisma.medication.createMany({
      data: [
        { name: "Atorvastatin 20mg", brandName: "Lipitor", stockQuantity: 140, unitPrice: 12.5, requiresPrescription: true },
        { name: "Metformin 500mg", brandName: "Glucophage", stockQuantity: 220, unitPrice: 8.75, requiresPrescription: true },
        { name: "Paracetamol 500mg", brandName: "Tylenol", stockQuantity: 450, unitPrice: 2.1, requiresPrescription: false },
      ],
    });
  }

  if ((await prisma.appointment.count()) === 0) {
    const now = new Date();
    const appt1Start = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 30);
    const appt2Start = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 14, 0);
    await prisma.appointment.createMany({
      data: [
        {
          patientId: profiles.patientOne.id,
          doctorId: profiles.doctorOne.id,
          date: appt1Start,
          startTime: appt1Start,
          endTime: new Date(appt1Start.getTime() + 30 * 60 * 1000),
          status: "SCHEDULED",
          reasonForVisit: "Cardiology follow-up",
        },
        {
          patientId: profiles.patientTwo.id,
          doctorId: profiles.doctorTwo.id,
          date: appt2Start,
          startTime: appt2Start,
          endTime: new Date(appt2Start.getTime() + 30 * 60 * 1000),
          status: "IN_PROGRESS",
          reasonForVisit: "Thyroid panel review",
        },
      ],
    });
  }

  if ((await prisma.labReport.count()) === 0) {
    await prisma.labReport.createMany({
      data: [
        {
          patientId: profiles.patientOne.id,
          doctorId: profiles.doctorOne.id,
          title: "Lipid Panel",
          summary: "LDL slightly elevated",
          status: "PENDING_REVIEW",
          resultNotes: "Diet and exercise follow-up recommended",
        },
        {
          patientId: profiles.patientTwo.id,
          doctorId: profiles.doctorTwo.id,
          title: "Thyroid Profile",
          summary: "TSH below normal range",
          status: "CRITICAL",
          resultNotes: "Immediate endocrinology review needed",
        },
      ],
    });
  }

  if ((await prisma.walkInQueue.count()) === 0) {
    await prisma.walkInQueue.createMany({
      data: [
        { patientName: "John Doe", phoneNumber: "+1-555-1301", priority: 2, reason: "Fever and headache", status: "WAITING" },
        { patientName: "Alice Cooper", phoneNumber: "+1-555-1302", priority: 1, reason: "Allergic reaction", status: "IN_TRIAGE" },
      ],
    });
  }

  if ((await prisma.transaction.count()) === 0) {
    await prisma.transaction.createMany({
      data: [
        {
          patientId: profiles.patientOne.id,
          amount: 120,
          currency: "USD",
          status: "PAID",
          paymentMethod: "CARD",
          description: "Consultation copay",
        },
        {
          patientId: profiles.patientTwo.id,
          amount: 50,
          currency: "USD",
          status: "PENDING",
          paymentMethod: "CASH",
          description: "Lab copay",
        },
      ],
    });
  }

  if ((await prisma.medicalRecord.count()) === 0) {
    const appointment = await prisma.appointment.findFirst({ where: { patientId: profiles.patientOne.id } });
    if (appointment) {
      await prisma.medicalRecord.create({
        data: {
          patientId: profiles.patientOne.id,
          doctorId: profiles.doctorOne.id,
          appointmentId: appointment.id,
          diagnosis: "Stable hypertension, continue current regimen",
          symptoms: ["Occasional headache"],
          treatment: "Continue amlodipine and reduce sodium intake",
          notes: "Follow-up in 4 weeks",
          files: [],
        },
      });
    }
  }

  if ((await prisma.prescription.count()) === 0) {
    const meds = await prisma.medication.findMany({ take: 2 });
    if (meds.length >= 2) {
      const rx = await prisma.prescription.create({
        data: {
          patientId: profiles.patientOne.id,
          doctorId: profiles.doctorOne.id,
          status: "PENDING",
          notes: "Take after meals",
        },
      });
      await prisma.prescriptionItem.createMany({
        data: [
          { prescriptionId: rx.id, medicationId: meds[0]!.id, dosage: "20mg", frequency: "Once daily", durationDays: 30, quantity: 30 },
          { prescriptionId: rx.id, medicationId: meds[1]!.id, dosage: "500mg", frequency: "Twice daily", durationDays: 30, quantity: 60 },
        ],
      });
    }
  }
}

async function main() {
  const users = await ensureUsers();
  const profiles = await ensureProfiles(users);
  await ensureClinicalData(profiles);
  console.log("Seed complete.");
  console.log("Demo users (password: Pass@123):");
  console.log("- admin@healthcare.local");
  console.log("- reception@healthcare.local");
  console.log("- pharmacy@healthcare.local");
  console.log("- dr.jenkins@healthcare.local");
  console.log("- dr.fox@healthcare.local");
  console.log("- aarav@healthcare.local");
  console.log("- neha@healthcare.local");
}

main()
  .catch((e) => {
    console.error("Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
