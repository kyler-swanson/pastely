import jwt from 'jsonwebtoken';

module.exports.withLogin = () => {
  let token = jwt.sign({
    id: 1
  }, process.env.SECRET_KEY, {
    expiresIn: '1h'
  });

  return token;
}