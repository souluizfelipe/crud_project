const CustomersModel = require('../models/customers');

function add(req, res) {
  
  const { name, age, email, password } = req.body;
  
  console.log(password);
  
  const register = new CustomersModel({
      name,
      age,
      email,
      password,
  })

  register.save();

  res.redirect('/register?r=1');

};

module.exports = {
  add,
};