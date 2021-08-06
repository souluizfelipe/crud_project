const router = require('express').Router();
const CustomersController = require('../controllers/customers');


router.get('/', (req, res) => {
  res.render('index', {
    title: 'CRUD Project',
  });
});

router.get('/register', (req, res) => {
  const { r } = req.query;
  
  res.render('register', {
    title: 'Register - CRUD Project',
    register: r
  });
});

router.post('/register/add', CustomersController.add);

module.exports = router;
