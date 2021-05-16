const { v4: uuidv4 } = require('uuid');

class Task {
  constructor(reqBoardId, {
    id = uuidv4(),
    title = 'test task',
    description ="task description",
    order = 0,
    userId = "1",
    columnId ="1"
   
  } = {}) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.order = order;

    this.userId = userId;
    this.boardId = reqBoardId;
    this.columnId = columnId;
   
  }

  static getTask(task) {
    
    // const { id, title, order, description, userId } = task;
    // return { id, title, order, description, userId };
    return task
  }
}

module.exports = Task;
