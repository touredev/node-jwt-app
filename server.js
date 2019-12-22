const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())

require('./router/router.js')(app);

const db = require('./config/db.config.js');

const Role = db.role;

// force: true will drop the table if it already exists
db.sequelize.sync({
  force: true
}).then(() => {
  console.log('Drop and Resync with { force: true }');
  initial();
});

// Create a Server
var server = app.listen(3194, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("App listening at http://%s:%s", host, port)
})


function initial() {
  Role.create({
    id: 1,
    name: "USER"
  });

  Role.create({
    id: 2,
    name: "ADMIN"
  });

  Role.create({
    id: 3,
    name: "PM"
  });
}