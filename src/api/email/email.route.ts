import { Router } from 'express';
import {
  sendTrackedEmail,
  trackEmailOpen,
  getSentEmails,
  getEmailDetails,
} from './email.controller';
import { ensureAuthenticated } from '../../middleware/ensureAuthenticated';
import { validate } from '../../middleware/validateRequest';
import { sendEmailSchema } from './email.validation';

const router = Router();

router.get('/track/:emailId', trackEmailOpen);

//protected route
router.post(
  '/send',
  ensureAuthenticated,
  validate(sendEmailSchema),
  sendTrackedEmail,
);
router.get('/', ensureAuthenticated, getSentEmails);
router.get('/:id', ensureAuthenticated, getEmailDetails);

export default router;
