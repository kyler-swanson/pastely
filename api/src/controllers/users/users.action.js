import User from '../../models/User.model';

module.exports.listUsers = (req, res) => {
    User.find({}, (err, users) => {
        if (err) return res.status(500).json(err);
        res.status(200).json(users);
    });
}