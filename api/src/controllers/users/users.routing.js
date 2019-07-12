import express from 'express';
const router = express.Router();
import { requireAuth } from '../../middleware/auth';

import { listUsers } from './users.action';

router.get('/', requireAuth, listUsers);

module.exports = router;