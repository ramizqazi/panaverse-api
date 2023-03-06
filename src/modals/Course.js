const mongoose = require('mongoose');

const { Schema } = mongoose;

const Course = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  image: {
    type: String,
    required: [true, 'Image is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
}, { timestamps: true });

Course.index({
  name: 'text',
});

// Course.index({
//   store: {
//     name: 1,
//   },
// });

Course.methods.toJSON = function toJSON() {
  return {
    id: this._id,
    name: this.name,
    image: this.image,
    description: this.description,
  };
};

module.exports = mongoose.model('courses', Course);
