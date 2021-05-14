const DATA_BOARDS = [
  {
    id: "1",
    title: "testboard",
    columns: [
      {
        id: "1",
        title: "testcolumn",
        order: 0,
      },
    ],
  },
];

const getAll = async () => DATA_BOARDS;
const getBoard = async (id) => DATA_BOARDS.find((el) => el.id === id || null);
const createBoard = async (board) => DATA_BOARDS.push(board);
const updateBoard = async (board) => {
  const index = DATA_BOARDS.findIndex((el) => el.id === board.id);
  DATA_BOARDS[index] = board;
  return DATA_BOARDS[index];
};

const deleteBoard = async (id) => {
  const index = DATA_BOARDS.findIndex((el) => el.id === id);
 ( DATA_BOARDS.splice(index, 1))
};

module.exports = { getAll, getBoard, createBoard, updateBoard, deleteBoard };
