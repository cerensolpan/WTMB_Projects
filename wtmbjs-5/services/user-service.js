const BaseService = require('./base-service');
const UserModel = require('../models/user-model');

class UserService extends BaseService {
    model = UserModel
    // constructor() {
    //     super(UserModel, `${__dirname}/../user-database.json`);
    // }
}

module.exports = new UserService();