const BaseService = require('./base-service');
const UserModel = require('../models/user-model');

class UserService extends BaseService {
    model = UserModel

    async addPlaylist(user, song) {
        user.playlist.push(song)
        await user.save()
    }

    // async deleteSong(user, songId) {
    //     const songIndex = user.playlist.findIndex((c) => c.id === songId);
    //     user.playlist.splice(songIndex, 1);
    //     await user.save()
    // }
    async deletePlaylist(user, song) {
        Array.prototype.remove = function (key, value) {
            const index = this.findIndex((obj) => obj[key] === value);
            return index >= 0 ? [...this.slice(0, index), ...this.slice(index + 1)] :
                this;
        };
        user.playlist.remove(song)
        await user.save();
    }
}

module.exports = new UserService();