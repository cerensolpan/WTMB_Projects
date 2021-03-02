const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    playlist: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Song',
        autopopulate: {
            maxDepth: 2
        }
    }],

})


UserSchema.plugin(require('mongoose-autopopulate'))

const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel;