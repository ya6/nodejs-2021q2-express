const DATA_BOARDS = []

const getAll = async () => DATA_BOARDS;
const getBoard = async (id) => DATA_BOARDS.find(el => el.id === id || null);
const createBoard = async (user) => DATA_BOARDS.push(user);
const updateBoard = async (user) =>{
    const index = DATA_BOARDS.findIndex(el => el.id === user.id);
    DATA_BOARDS[index] = user;
    return DATA_BOARDS[index];
};

const deleteBoard = async (id) =>{
    const index = DATA_BOARDS.findIndex(el => el.id === id);
  return DATA_BOARDS.splice(index, 1) 
} 


module.exports = { getAll,  getBoard, createBoard, updateBoard, deleteBoard};
