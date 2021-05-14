const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();
const getBoard = (id) => boardsRepo.getBoard(id);
const createBoard = (user) => boardsRepo.createBoard(user);
const updateBoard = (user) => boardsRepo.updateBoard(user);
const deleteBoard = (user) => boardsRepo.deleteBoard(user);

module.exports = { getAll, getBoard, createBoard, updateBoard, deleteBoard };
