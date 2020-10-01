const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  text: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  lat: {
    type: Number,
    isRequired: true,
  },
  lng: {
    type: Number,
    isRequired: true,
  },
});

module.exports = Post = mongoose.model('post', PostSchema);
