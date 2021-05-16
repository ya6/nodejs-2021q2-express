const router = require('express').Router({ mergeParams: true });
const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  // console.log('---->', await tasksService.getAll(), '<------');
  const { boardId } = req.params;
  const tasks = await tasksService.getAllTasks(boardId);
  res.status(tasks ? 200 : 400).json(tasks.map((task) => Task.getTask(task)));
});
module.exports = router;


router.route('/:taskId').get(async (req, res) => {
    const { boardId, taskId } = req.params; 
    const task = await tasksService.getTask(boardId, taskId );
    res
      .status(task ? 200 : 404)
      .json(Task.getTask(task));
  });


  router.route('/').post(async (req, res) => {
      const { boardId } = req.params;
      const newTask = new Task(boardId, req.body);
    const task = await tasksService.createTask(newTask);
    res
      .status(task ? 201 : 400)
      .json(Task.getTask(task));
  });



  router.route('/:taskId').put(async (req, res) => {
    const {boardId, taskId} = req.params;
    const candidateToUpdate = { ...req.body, boardId, taskId};
    const task = await tasksService.updateTask(candidateToUpdate); 
    res
      .status(task ? 200 : 400)
      .json(Task.getTask(task) || {});
  });


  router.route('/:taskId').delete(async (req, res) => {
    const {taskId} = req.params;
    const result = await tasksService.deleteTask(taskId);
    res
      .status(result ? 204 : 404)
      .json();
  });
  




