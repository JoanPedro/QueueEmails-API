module.exports = server => {
  const Controllers = server.src.app.controllers;

  server.route('/users')
    .post(Controllers.User.store)
}