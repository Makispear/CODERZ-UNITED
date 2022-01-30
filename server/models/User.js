const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt');

const lessonSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId
    },
    lessonName: {
      type: String,
    },
    completedDate: {
      type: String,
      default: Date.now,
    },
    lessonNumber: {
      type: String,
    }
  },
  {
    toJSON: { getters: true },
  }
)

const userSchema = new Schema(
  {
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
    },
    completedLessons: [
      lessonSchema
    ]
  },
  {
    toJSON: { virtuals: true },
    versionKey: false
  }
)

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// get connection count for user sidebar
userSchema.virtual('connectionCount').get(function () {
  return this.connections.length;
});

const User = model('User', userSchema)

module.exports = User
