const CustomersModel = require('../models/customers');
const { crypto } = require('../utils/password');

async function add(req, res) {
  
  const { name, age, email, password } = req.body;
  
  const cryptedPassword = await crypto(password);

  const register = new CustomersModel({
      name,
      age,
      email,
      password: cryptedPassword,
  })

  register.save();

  res.redirect('/register?r=1');

};

function register(req, res) {
  const { r } = req.query;
  
  res.render('register', {
    title: 'Register - CRUD Project',
    register: r
  });
}

async function list(req, res) {
  const users = await CustomersModel.find();

  res.render('list', {
    title: 'Lista de clientes',
    users,
  });
}


module.exports = {
  add,
  register,
  list,
};