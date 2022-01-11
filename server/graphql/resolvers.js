const { User } = require('../models')
const { signToken, authMiddleware } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find()
    }
  },
  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);

      if (!user) {
        throw new Error(
          "Something went wrong when signing up. Please try again."
        );
      }
      const token = signToken(user);
      return { user, token };
    },

    login: async (parent, { email, password }) => {
      const user = await User.find({ email, password })

      if (!user) {
        throw new error("Incorrect login information.")
      }

      const correctPassword = await User.isCorrectPassword(password)

      if (!correctPassword) {
        throw new error("incorrect login information")
      }

      const token = signToken(user);
      return { token, user };
    }
  }
}

module.exports = resolvers
