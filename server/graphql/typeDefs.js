const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
  }
  
  type Query {
    users: [User]
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


  }
`

module.exports = typeDefs
