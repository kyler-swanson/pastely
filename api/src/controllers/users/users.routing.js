import express from 'express';
const router = express.Router();
import { validateUser } from '../../middleware/auth';

import { listUsers } from './users.action';

router.get('/', validateUser, listUsers);

module.exports = router;