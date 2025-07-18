import { Router } from 'express';
import {
  sendTrackedEmail,
  trackEmailOpen,
  getSentEmails,
} from './email.controller';
import { ensureAuthenticated } from '../../middleware/ensureAuthenticated';

const router = Router();

router.get('/track/:emailId', trackEmailOpen);

//protected route
router.post('/send', ensureAuthenticated, sendTrackedEmail);
router.get('/', ensureAuthenticated, getSentEmails);

export default router;
