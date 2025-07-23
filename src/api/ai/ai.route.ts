import { Router } from 'express';
import { generateSubjectLines } from './ai.controller';
import { ensureAuthenticated } from '../../middleware/ensureAuthenticated';

const router = Router();

router.post('/generate-subject', ensureAuthenticated, generateSubjectLines);

export default router;
