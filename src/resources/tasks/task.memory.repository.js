const DATA_TASKS = [
  {
    id: '1',
    title: 'task1 title',
    order: 0,
    description: 'description',
    userId: '1',
    boardId: '1',
    columnId: '1',
  },
  {
    id: '2',
    title: 'task2 title',
    order: 0,
    description: 'description',
    userId: '1',
    boardId: '2',
    columnId: '1',
  },
];

const getAll = async (boardId) => DATA_TASKS.filter((task)=> task.boardId === boardId);
const getBoard = async (id) => DATA_TASKS.find((el) => el.id === id || null);
const createBoard = async (board) => DATA_TASKS.push(board);
const updateBoard = async (board) => {
  const index = DATA_TASKS.findIndex((el) => el.id === board.id);
  DATA_TASKS[index] = board;
  return DATA_TASKS[index];
};

const deleteBoard = async (id) => {
  const index = DATA_TASKS.findIndex((el) => el.id === id);
  DATA_TASKS.splice(index, 1);
};

module.exports = { getAll, getBoard, createBoard, updateBoard, deleteBoard };
