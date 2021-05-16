const { v4: uuidv4 } = require('uuid');

class Board {
  constructor({
    id = uuidv4(),
    title = 'test board',
    columns: [
      { id: columnsId = uuidv4(), title: columnsTitle = 'test column', order:columnsOrder = 0 },
    ],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = [
      { id: columnsId, title: columnsTitle, order: columnsOrder },
    ];
  }

  static getBoard(board) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}

module.exports = Board;
