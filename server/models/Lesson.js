const { Schema } = require("mongoose");

const lessonSchema = new Schema(
  {
    lessonName: {
      type: String,
      required: true
    },
    completed: {
      type: Boolean,
      default: false
    },
    started: {
      type: Boolean,
      default: true
    },
    startedAt: {
      type: String,
      default: Date.now
    },
    completedAt: {
      type: String,
      default: null
    }
  },
  {
    toJSON: {
      getters: true,
    }
  }
);


module.exports = lessonSchema;
