const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        //default: "user"
        required: true,
    },
    playlist: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Song',
        autopopulate: {
            maxDepth: 1
        }
    }],

})


UserSchema.plugin(require('mongoose-autopopulate'))

const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel;