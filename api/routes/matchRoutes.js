import express from 'express';
import { createMatch, getMatches, getPslValuePicks } from '../controllers/matchController.js';

const router = express.Router();

router.post('/', createMatch);
router.get('/', getMatches);

router.get('/value-picks', getPslValuePicks);

export default router;