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

router.route('/:id').put(async (req, res) => {


const {id} = req.params;
 const updatedUser = {id, ...req.body};
 const oldUser = await usersService.getUser(id);
 if (oldUser) {
   const updUser = await usersService.updateUser(updatedUser);
   res.status(200).json(User.toResponse(updUser));
 } else {
   res.status(400).end();}
});
module.exports = router;
