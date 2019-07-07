const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({'message': 'Welcome to Pastely API'});
});

router.get('/test', (req, res, next) => {
    res.status(200).json({'message': 'api works! :-)'});
});

module.exports = router;