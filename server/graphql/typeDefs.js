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

  type Mutation {
    signup(firstName: String, lastName: String, Username: String, email: String!, password: String!): User
  }
`

module.exports = typeDefs
