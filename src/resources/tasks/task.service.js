const tasksRepo = require('./task.memory.repository');

const getAll = (boardId) => tasksRepo.getAll(boardId);
const getTask = (id) => tasksRepo.getTask(id);
const createTask = (user) => tasksRepo.createTask(user);
const updateTask = (user) => tasksRepo.updateTask(user);
const deleteTask = (user) => tasksRepo.deleteBoard(user);

module.exports = { getAll, getTask, createTask, updateTask, deleteTask };
