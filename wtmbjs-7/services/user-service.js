const BaseService = require('./base-service');
const UserModel = require('../models/user-model');

class UserService extends BaseService {
    model = UserModel

    async addPlaylist(user, song) {
        user.playlist.push(song)
        await user.save()
    }
    async deletePlaylist(user, song) {
        user.playlist.delete(song)
        await user.save()
    }
}

module.exports = new UserService();