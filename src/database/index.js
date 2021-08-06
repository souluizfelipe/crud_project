const mongoose = require('mongoose');

function connect() {
  mongoose.set('useNewUrlParser', true);
  mongoose.set('useUnifiedTopology', true);

  mongoose.connect('mongodb://localhost:27017/crud-proj?readPreference=primary&appname=MongoDB%20Compass&ssl=false');
  
  const db = mongoose.connection;

  db.once('open', () => {
    console.log('DB is connected');
  });

  db.on('error', console.error.bind(console, 'ERROR --> '));
}

module.exports = {
  connect
}

