import { gql } from "@apollo/client"

export const CREATE_USER = gql`
mutation createUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
  createUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
    user {
      firstName
      lastName
      email
      password
      _id
    }
    token
  }
}
`

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        username
        _id
        firstName
        lastName
        email
        password
      }
    }
  }
`
