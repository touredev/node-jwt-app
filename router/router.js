const verifySignUp = require('./verifySignUp');
const authJwt = require('./verifyJwtToken');

module.exports = (app) => {

  const controller = require('../controllers/controller.js');

  app.post('/api/auth/signup', [verifySignUp.checkDuplicateUserNameOrEmail, verifySignUp.checkRolesExisted], controller.signup);

  app.post('/api/auth/signin', controller.signin);

  app.get('/api/test/user', [authJwt.verifyToken], controller.userContent);

  app.get('/api/test/pm', [authJwt.verifyToken, authJwt.isPmOrAdmin], controller.managementBoard);

  app.get('/api/test/admin', [authJwt.verifyToken, authJwt.isAdmin], controller.adminBoard);
}