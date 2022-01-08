const { Schema, model } = require('mongoose')

const userSchema = new Schema(
  {
    Username: {
      type: String,
      required: true,
      unique: true
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    toJSON: { virtuals: true }
  }
)

const User = model('User', userSchema)

module.exports = User
