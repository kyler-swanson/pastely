import jwt from 'jsonwebtoken';

module.exports.requireAuth = (req, res, next) => {
    jwt.verify(req.headers['x-access-token'], process.env.SECRET_KEY, function (err, decoded) {
        if (err) {
            res.status(403).json({
                status: "error",
                message: err.message
            });
        } else {
            req.body.userId = decoded.id;
            next();
        }
    });
}