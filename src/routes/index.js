const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('index', {
    title: 'CRUD Project',
  });
});

module.exports = router;
