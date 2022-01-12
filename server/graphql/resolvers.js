const { User } = require('../models')
const { signToken, authMiddleware } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

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
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Incorrect login information");
      }
      const correctPassword = await user.isCorrectPassword(password);
      if (!correctPassword) {
        throw new AuthenticationError("Incorrect login information");
      }
      const token = signToken(user);
      return { token, user };
    },
  }
}

module.exports = resolvers
