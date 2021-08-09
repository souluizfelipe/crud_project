const router = require('express').Router();
const CustomersController = require('../controllers/customers');
const IndexController = require('../controllers/index');


router.get('/', IndexController.index );

router.get('/register', CustomersController.register);
router.post('/register/add', CustomersController.add);
router.get('/list', CustomersController.list);

module.exports = router;
