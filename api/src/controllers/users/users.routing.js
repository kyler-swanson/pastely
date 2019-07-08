import express from 'express';
const router = express.Router();

import { listUsers } from './users.action';

router.get('/', listUsers);

module.exports = router;