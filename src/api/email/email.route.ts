import { Router } from 'express';
import { trackEmailOpen } from './email.controller';

const router = Router();

router.get('/track/:emailId', trackEmailOpen);

export default router;
