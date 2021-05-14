const DATA_USERS = [{id: "1", name: 'test', login: 'test', password: 'test' }]

const getAll = async () => DATA_USERS;
const getUser = async (id) => DATA_USERS.find(el => el.id === id || null);
const createUser = async (user) => DATA_USERS.push(user);
const updateUser = async (user) =>{
    const index = DATA_USERS.findIndex(el => el.id === user.id);
    DATA_USERS[index] = user;
    return DATA_USERS[index];
};

module.exports = { getAll,  getUser, createUser, updateUser};
