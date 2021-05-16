const tasksRepo = require('./task.memory.repository');

const getAll = () => tasksRepo.getAll();
const getAllTasks = (boardId) => tasksRepo.getAllTasks(boardId);
const getTask = (boardId, taskId) => tasksRepo.getTask(boardId, taskId);
const createTask = (task) => tasksRepo.createTask(task);
const updateTask = (candidateToUpdate) => tasksRepo.updateTask(candidateToUpdate);
const deleteTask = (taskId) => tasksRepo.deleteTask(taskId);

module.exports = { getAll, getAllTasks, getTask, createTask, updateTask, deleteTask };
