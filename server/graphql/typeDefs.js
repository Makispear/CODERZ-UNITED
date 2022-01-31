const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type CompletedLessons {
    lessonName: String
    lessonNumber: String
    completedDate: String
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    username: String
    isNewsLetter: Boolean
    completedLessons : [CompletedLessons]
  }
  
  type Query {
    users: [User]
    me: User
    getCompletedLessons: User
  }

  type Auth {
    user: User
    token: ID!
  }

  type Mutation {

    createUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth

    login(email: String!, password: String!): Auth

    markLessonComplete(
      lessonName: String!
      lessonNumber: String!
    ): User

    joinNewsLetter(isNewsLetter: Boolean): User
  }
`

module.exports = typeDefs
