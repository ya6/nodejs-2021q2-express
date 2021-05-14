const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const getUser = (id) => usersRepo.getUser(id);
const createUser = (user) => usersRepo.createUser(user);
const updateUser = (user) => usersRepo.updateUser(user);

module.exports = { getAll, getUser, createUser, updateUser };
