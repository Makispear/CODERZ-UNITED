import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
      isNewsLetter
      firstName
      lastName
      email
    }
  }
`
