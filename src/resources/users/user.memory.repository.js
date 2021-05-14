// const DATA_USERS = [{
//   "id" : "1",
//   "name" : "user1_name",
//   "login" : 'user1_login',
//   "password" : 'user1_password'
// }]
const DATA_USERS = []

const getAll = async () => DATA_USERS;
const getUser = async (id) => DATA_USERS.find(el => el.id === id);
const createUser = async (user) => DATA_USERS.push(user);

module.exports = { getAll,  getUser, createUser};
