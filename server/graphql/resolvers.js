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
  }
}

module.exports = resolvers
