const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1/project-1', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndexes: true
})

module.exports = mongoose.connection
