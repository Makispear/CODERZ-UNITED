import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
      _id
      firstName
      lastName
      email
    }
  }
`
export const GET_COMPLETED_LESSONS = gql`
  query getCompletedLessons {
    getCompletedLessons {
      completedLessons {
        lessonName
        lessonNumber
      }
    }
  }
`
