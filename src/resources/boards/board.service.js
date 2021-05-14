const usersRepo = require('./board.memory.repository');

const getAll = () => usersRepo.getAll();
const getBoard = (id) => usersRepo.getBoard(id);
const createBoard = (user) => usersRepo.createBoard(user);
const updateBoard = (user) => usersRepo.updateBoard(user);
const deleteBoard = (user) => usersRepo.deleteBoard(user);

module.exports = { getAll, getBoard, createBoard, updateBoard, deleteBoard };
