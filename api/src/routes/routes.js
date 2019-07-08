import express from 'express';
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({'message': 'Welcome to Pastely API'});
});

import users from '../controllers/users/users.routing';
router.use('/users', users);

module.exports = router;