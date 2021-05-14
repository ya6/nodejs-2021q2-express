const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');


router.route('/:id').get(async (req, res) => {
  const {id} = req.params;
  const user = await usersService.getUser(id)
  res.status(user ? 200 : 404 );
   res.json(User.toResponse(user));
});


router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(el => User.toResponse(el)));
});


router.route('/').post(async (req, res) => {
  const newUser = new User(req.body);
  await usersService.createUser(newUser);
  const user = await usersService.getUser(newUser.id);
  res.header('Content-Type', 'application/json')
  res.status(user ? 201 : 400 );
  res.json(User.toResponse(user));
});

module.exports = router;
