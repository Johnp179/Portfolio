const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
  name: String,
  email:String,
  content:String,

});

const Message = mongoose.model('messages',  messageSchema);

module.exports =  Message;