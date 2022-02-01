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
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        firstName
        lastName
        _id
        email
        password
        username
      }
      token
    }
  }
`

export const MARK_COMPLETED_LESSON = gql`
mutation MarkLessonComplete($lessonName: String!, $lessonNumber: String!) {
  markLessonComplete(lessonName: $lessonName, lessonNumber: $lessonNumber) {
    completedLessons {
      lessonName
      lessonNumber
    }
  }
}
`
export const JOIN_NEWS_LETTER = gql`
  mutation JoinNewsLetter($email: String) {
    joinNewsLetter(email: $email) {
      isNewsLetter
    }
  }
`

export const Leave_News_Letter = gql`
  mutation Mutation($isNewsLetter: Boolean) {
    leaveNewsLetter(isNewsLetter: $isNewsLetter) {
      isNewsLetter
    }
  }
`
