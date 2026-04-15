import { Router } from 'express';
import { authenticate, authorizeRole } from '../middleware/auth.middleware';
import * as adminController from '../controller/admin.controller';

const router = Router();

router.use(authenticate, authorizeRole(['ADMIN']));

router.get('/me', adminController.getMe);
router.patch('/me', adminController.patchMe);
router.get('/overview', adminController.getOverview);
router.get('/overview/trends', adminController.getOverviewTrends);

router.get('/users', adminController.getUsers);
router.patch('/users/:id/role', adminController.patchUserRole);

router.get('/financial-report', adminController.getFinancialReport);
router.get('/activity', adminController.getActivity);
router.get('/audit', adminController.getAudit);
router.get('/audit/export', adminController.exportAuditCsv);

router.get('/config', adminController.getConfig);
router.patch('/config/:section', adminController.patchConfig);

export default router;
