var mongoose = require('mongoose');

//user
var UserSchema = new mongoose.Schema({
	username:	{ type: String },
	password:	{ type: String },
	role: {}
});

UserSchema.set('collection', 'User');

module.exports = mongoose.model('User', UserSchema);