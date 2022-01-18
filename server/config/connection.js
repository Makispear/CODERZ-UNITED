const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1/CODERZUNTED', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // uncomment this for production 
  useCreateIndexes: true
})

module.exports = mongoose.connection
