const DATA_TASKS = [
  {
    id: '1',
    title: 'string',
    order: 0,
    description: 'string',
    userId: '1',
    boardId: '1',
    columnId: '1',
  },
];

const getAll = async () => DATA_TASKS;

const getAllTasks = async (boardId) =>
  DATA_TASKS.filter((task) => task.boardId === boardId);

const getTask = async (boardId, taskId) =>
  DATA_TASKS.find((el) => (el.boardId === boardId && el.id === taskId) || null);

const createTask = async (task) => DATA_TASKS.push(task);

const updateTask = async ({ taskId, ...otherParams }) => {
  const index = DATA_TASKS.findIndex((task) => task.id === taskId);

  if (index !== -1) {
    const newTaskParams = { ...otherParams, id: taskId };
    DATA_TASKS[index] = newTaskParams;
    return DATA_TASKS[index];
  }

  return false;
};

const deleteTask = async (id) => {
  const index = DATA_TASKS.findIndex((task) => task.id === id);
  if (index !== -1) {
    DATA_TASKS.splice(index, 1);
    return id
  }
  return false
};


module.exports = {
  getAll,
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
