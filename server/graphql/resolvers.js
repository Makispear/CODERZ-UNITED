const { User } = require('../models')

const resolvers = {
  Query: {
    users: async () => {
      return User.find()
    }
  },
  Mutation: {
    signup: async (parent, args) => {
      const createdUser = await User.create(args)

      if (!createdUser) {
        throw new Error("Something went wrong when signing up. Please try again.")
      }

      return { createdUser }
    }
  }
}

module.exports = resolvers
