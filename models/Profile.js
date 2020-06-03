const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  company: {
    type: String
  },
  location: {
    type: String
  },
  status: {
    type: String,
    required: true
  },
  skill: {
    type: [String],
    required: true
  },
  bio: {
    type: String
  },
  appointment: [
    {
      title: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      address: {
        type: String,
        required: true
      },
      from: {
        type: Date,
        required: true
      },
      phone: {
        type: Number,
        required: true
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

const Profile = mongoose.model('profile', ProfileSchema);

module.exports = Profile;
