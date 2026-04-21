import type { Response } from "express";
import type { AuthRequest } from "../middleware/auth.middleware";
import * as adminService from "../services/admin.service";
import type { Role } from "../generated/prisma";

function userId(req: AuthRequest, res: Response): string | null {
  if (!req.user?.id) {
    res.status(401).json({ message: "Unauthorized" });
    return null;
  }
  return req.user.id;
}

function fail(error: unknown, res: Response) {
  if (error instanceof adminService.AdminNotFoundError) {
    res.status(404).json({ message: error.message });
    return;
  }
  const message = error instanceof Error ? error.message : "Server error";
  res.status(message.includes("not found") ? 404 : 400).json({ message });
}

export const getMe = async (req: AuthRequest, res: Response) => {
  const id = userId(req, res);
  if (!id) return;
  try {
    res.status(200).json(await adminService.getMe(id));
  } catch (e) {
    fail(e, res);
  }
};
export const patchMe = async (req: AuthRequest, res: Response) => {
  const id = userId(req, res);
  if (!id) return;
  try {
    res.status(200).json(await adminService.patchMe(id, req.body));
  } catch (e) {
    fail(e, res);
  }
};
export const getOverview = async (req: AuthRequest, res: Response) => {
  const id = userId(req, res);
  if (!id) return;
  try {
    res.status(200).json(await adminService.getOverview(id));
  } catch (e) {
    fail(e, res);
  }
};
export const getOverviewTrends = async (req: AuthRequest, res: Response) => {
  const id = userId(req, res);
  if (!id) return;
  const rangeRaw = typeof req.query.range === "string" ? req.query.range : "90d";
  const range = Number.parseInt(rangeRaw.replace("d", ""), 10);
  try {
    res.status(200).json(await adminService.getOverviewTrends(id, range));
  } catch (e) {
    fail(e, res);
  }
};
export const getUsers = async (req: AuthRequest, res: Response) => {
  const id = userId(req, res);
  if (!id) return;
  try {
    res.status(200).json({ users: await adminService.listUsers(id) });
  } catch (e) {
    fail(e, res);
  }
};
export const patchUserRole = async (req: AuthRequest, res: Response) => {
  const id = userId(req, res);
  if (!id) return;
  const target =
    typeof req.params.id === "string" ? req.params.id : req.params.id?.[0];
  if (!target) {
    res.status(400).json({ message: "Missing user id" });
    return;
  }
  try {
    res
      .status(200)
      .json(
        await adminService.patchUserRole(id, target, req.body.role as Role),
      );
  } catch (e) {
    fail(e, res);
  }
};
export const patchUserStatus = async (req: AuthRequest, res: Response) => {
  const id = userId(req, res);
  if (!id) return;
  const target =
    typeof req.params.id === "string" ? req.params.id : req.params.id?.[0];
  if (!target) {
    res.status(400).json({ message: "Missing user id" });
    return;
  }
  const status =
    req.body.status === "ACTIVE" ||
    req.body.status === "DEACTIVATED" ||
    req.body.status === "BLOCKED"
      ? req.body.status
      : null;
  if (!status) {
    res.status(400).json({ message: "Invalid user status" });
    return;
  }
  try {
    res.status(200).json(await adminService.patchUserStatus(id, target, status));
  } catch (e) {
    fail(e, res);
  }
};
export const deleteUser = async (req: AuthRequest, res: Response) => {
  const id = userId(req, res);
  if (!id) return;
  const target =
    typeof req.params.id === "string" ? req.params.id : req.params.id?.[0];
  if (!target) {
    res.status(400).json({ message: "Missing user id" });
    return;
  }
  try {
    res.status(200).json(await adminService.deleteUser(id, target));
  } catch (e) {
    fail(e, res);
  }
};
export const getFinancialReport = async (req: AuthRequest, res: Response) => {
  const id = userId(req, res);
  if (!id) return;
  try {
    res.status(200).json(await adminService.getFinancialReport(id));
  } catch (e) {
    fail(e, res);
  }
};
export const getActivity = async (req: AuthRequest, res: Response) => {
  const id = userId(req, res);
  if (!id) return;
  const rangeRaw = typeof req.query.range === "string" ? req.query.range : "24h";
  const range =
    rangeRaw === "24h" || rangeRaw === "7d" || rangeRaw === "30d" || rangeRaw === "all"
      ? rangeRaw
      : "24h";
  try {
    res.status(200).json(await adminService.getActivity(id, range));
  } catch (e) {
    fail(e, res);
  }
};
export const getAudit = async (req: AuthRequest, res: Response) => {
  const id = userId(req, res);
  if (!id) return;
  try {
    res.status(200).json(await adminService.getAudit(id));
  } catch (e) {
    fail(e, res);
  }
};
export const exportAuditCsv = async (req: AuthRequest, res: Response) => {
  const id = userId(req, res);
  if (!id) return;
  try {
    const data = await adminService.getAudit(id);
    const rows = data.logs.map((log) => [log.id, log.category, log.message, log.ipAddress, log.at]);
    const escape = (value: string) => `"${value.replaceAll('"', '""')}"`;
    const csv = [
      ["id", "category", "message", "ipAddress", "timestamp"].map(escape).join(","),
      ...rows.map((row) => row.map((v) => escape(String(v))).join(",")),
    ].join("\n");

    res.setHeader("Content-Type", "text/csv; charset=utf-8");
    res.setHeader("Content-Disposition", "attachment; filename=audit-logs.csv");
    res.status(200).send(csv);
  } catch (e) {
    fail(e, res);
  }
};
export const getConfig = async (req: AuthRequest, res: Response) => {
  const id = userId(req, res);
  if (!id) return;
  try {
    res.status(200).json(await adminService.getConfig(id));
  } catch (e) {
    fail(e, res);
  }
};
export const patchConfig = async (req: AuthRequest, res: Response) => {
  const id = userId(req, res);
  if (!id) return;
  const section =
    typeof req.params.section === "string"
      ? req.params.section
      : req.params.section?.[0];
  if (
    !section ||
    !["config", "settings", "hospitalProfile", "reviews"].includes(section)
  ) {
    res.status(400).json({ message: "Invalid section" });
    return;
  }
  try {
    res
      .status(200)
      .json(
        await adminService.patchConfig(
          id,
          section as "config" | "settings" | "hospitalProfile" | "reviews",
          req.body.value,
        ),
      );
  } catch (e) {
    fail(e, res);
  }
};
