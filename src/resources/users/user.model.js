const { v4: uuidv4 } = require('uuid');

 console.log( typeof uuidv4());
class User {
  constructor({
    id =  uuidv4(),
    //  id ="uuid()",
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

module.exports = User;
