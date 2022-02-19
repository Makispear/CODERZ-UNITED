const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type CompletedLessons {
    lessonName: String
    lessonNumber: String
    completedDate: String
  }

  type Logins {
    loginTime: String
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
    logins : [Logins]
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

    login(email: String!, password: String!, loginTime: String): Auth

    markLessonComplete(
      lessonName: String!
      lessonNumber: String!
    ): User

    joinNewsLetter(email: String): User


  }
`

module.exports = typeDefs
