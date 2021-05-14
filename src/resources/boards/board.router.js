const router = require('express').Router();
const Board = require("./board.model");
const boardsService = require("./board.service");





 router.route('/').get(async (req, res) => {
    const boards = await boardsService.getAll();
    res.json(boards);
  });



router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  const board = await boardsService.getBoard(id);
  res.status(board ? 200 : 404);
  res.json(board);
});



router.route('/').post(async (req, res) => {
  const newBoard = new Board(req.body);
  await boardsService.createBoard(newBoard);
  const board = await boardsService.getBoard(newBoard.id);
  res.header('Content-Type', 'application/json');
  res.status(board ? 201 : 400);
  res.json(board);
  res.end();
});

router.route('/:id').put(async (req, res) => {
  const { id } = req.params;
  const updateBoard = { id, ...req.body };
  const oldUBoard = await boardsService.getBoard(id);
  if (oldUBoard) {
    const updBoard = await boardsService.updateBoard(updateBoard);
    res.status(200).json(updBoard);
  } else {
    res.status(400).end();
  }
});

router.route('/:id').delete(async (req, res) => {
  const { id } = req.params;
  const oldboard  = await boardsService.getBoard(id);
  if (oldboard) {
    await boardsService.deleteBoard(id);
    res.status(204).end();
  } else {
    res.status(404).end();}
});


module.exports = router;
