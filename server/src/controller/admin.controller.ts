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
  try {
    res.status(200).json(await adminService.getActivity(id));
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
