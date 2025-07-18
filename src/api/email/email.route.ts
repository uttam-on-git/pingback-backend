import { Router } from 'express';
import { sendTrackedEmail, trackEmailOpen } from './email.controller';
import { ensureAuthenticated } from '../../middleware/ensureAuthenticated';

const router = Router();

router.get('/track/:emailId', trackEmailOpen);
router.post('/send', ensureAuthenticated, sendTrackedEmail);

export default router;
