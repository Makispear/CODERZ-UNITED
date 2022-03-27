import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
      isNewsLetter
      firstName
      lastName
      logins {
        loginTime
      }
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
      firstName
      logins {
        loginTime
      }
    }
  }
`;

export const GET_TUTORIAL_TIP_STATUS = gql`
  query GetTutorialTipStatus {
    getTutorialTipStatus {
      tutorialCompleted
      firstName
    }
  }
`
