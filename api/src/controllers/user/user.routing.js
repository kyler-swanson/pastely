import express from 'express';
const router = express.Router();

import { createUser, authenticateUser } from './user.action';

router.post('/create', createUser);
router.post('/auth', authenticateUser);

module.exports = router;