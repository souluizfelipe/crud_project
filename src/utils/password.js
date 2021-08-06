const bcrypt = require('bcrypt');

async function crypto(psw) {

  const salt = await bcrypt.genSalt();
  const password = await bcrypt.hash(psw, salt);

  return password;
};

module.exports = {
  crypto,
}