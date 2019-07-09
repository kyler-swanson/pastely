import User from '../../models/User.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import app from '../../index';

module.exports.createUser = (req, res, next) => {
    User.create(
        {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        },
        (err, user) => {
            if (err) return res.status(400).json({status: 'error', message: err.message});
            res.status(200).json({status: 'success', user: user});
        }
    );
}

module.exports.authenticateUser = (req, res, next) => {
    User.findOne({username: req.body.username}, (err, user) => {
        if (err) return next(err);
        bcrypt.compare(req.body.password, user.password, (bErr, bRes) => {
            if (bRes) {
                let token = jwt.sign({
                    id: user._id
                }, process.env.SECRET_KEY, {
                    expiresIn: '1h'
                });

                res.status(200).json({
                    status: 'success',
                    data: {
                        auth_user: user,
                        token: token
                    }
                });
                return next();
            } else {
                res.status(403).json({
                    status: 'error',
                    message: 'USER_INVALID'
                });
                return next();
            }
        });
    });
}