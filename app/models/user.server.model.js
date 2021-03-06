var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({

  username: {
    type: String,
    required: "Username must be specified",
    unique: true
  },

  password: {
    type: String,
    required: "Password must be specified"
  },

  created: {
    type: Date,
    default: Date.now
  },

  sent: [String],
  received: [String]

});

mongoose.model('User', UserSchema);