const { User } = require('../models')
const { signToken, authMiddleware } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    users: async () => {
      return User.find()
    },

    me: async (_, __, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select("-__v -password").populate('completedLessons').populate('logins')
        return userData;
      }
      throw new AuthenticationError("Please login to continue.");
    },

    getCompletedLessons: async (_, __, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).populate('completedLessons').populate('logins')
        return userData
      }
      throw new AuthenticationError("Please login to continue.");
    },

    getTutorialTipStatus: async (_, __, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
        return userData
      }
      throw new AuthenticationError('Please Login to continue')
    }
  },


  Mutation: {
    createUser: async (_, args) => {
      const user = await User.create(args)
      if (!user) {
        throw new AuthenticationError("Something went wrong when signing up. Please try again.");
      }

      const updatedUser = await User.findOneAndUpdate({ email: args.email }, { $addToSet: { logins: { loginTime: Date.now() } } }, { new: true })

      const token = signToken(updatedUser);
      return { updatedUser, token };
    },

    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Incorrect login information");
      }
      const correctPassword = await user.isCorrectPassword(password);
      if (!correctPassword) {
        throw new AuthenticationError("Incorrect login information");
      }

      const updatedUser = await User.findOneAndUpdate({ email: email }, { $addToSet: { logins: { loginTime: Date.now() } } }, { new: true })

      const token = signToken(updatedUser);
      return { token, updatedUser };
    },

    // User can mark a  lesson as complete: This will add that lesson to the completedLessons Document
    // TODO fix duplicate
    markLessonComplete: async (_, args, context) => {
      if (context.user) {

        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { completedLessons: args } },
          { new: true, runValidators: true }
        ).populate('completedLessons')

        return updatedUser;
      }
      throw new AuthenticationError("Please login to continue.");
    },

    joinNewsLetter: async (_, { email }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { email: context.user.email },
          { $set: { isNewsLetter: true } },
          { new: true }
        )
        return updatedUser
      } else {
        const updatedUser = await User.findOneAndUpdate(
          { email: email },
          { $set: { isNewsLetter: true } },
          { new: true }
        )
        return updatedUser
      }
    },

    completeTutorialTips: async (_, __, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { email: context.user.email },
          { $set: { tutorialCompleted: true } },
          { new: true }
        )
        return updatedUser
      }
      throw new AuthenticationError('Please login to continue.')
    }

  }
}

module.exports = resolvers
