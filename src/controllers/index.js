

function index(req, res) {
    res.render('index', {
      title: 'CRUD Project',
    });
}

module.exports = {
  index,
}