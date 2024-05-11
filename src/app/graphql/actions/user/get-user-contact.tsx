
"use client";
import { DocumentNode, gql } from "@apollo/client";

export const GET_USER_CONTACT: DocumentNode = gql`
query getUser($name: String!) {
    getUser(name: $name) {
      name
      email
      ProfileUser {
        Contact {
          title
          description
        }
      }
      avatar {
        id
        url
      }
  }
}
`;
