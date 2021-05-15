const { v4: uuidv4 } = require('uuid');

class Task {
  constructor({
    id = uuidv4(),
    title = 'test board',
    columns: [
      {
        id: columnsId = uuidv4(),
        title: columnsTitle = 'test column',
        order: columnsOrder = 0,
      },
    ],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = [
      { id: columnsId, title: columnsTitle, order: columnsOrder },
    ];
  }

  static getTask(task) {
    const { id, title, order, description, userId } = task;
    return { id, title, order, description, userId };
  }
}

module.exports = Task;
