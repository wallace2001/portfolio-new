
"use client";
import { DocumentNode, gql } from "@apollo/client";

export const GET_USER_ABOUT: DocumentNode = gql`
query getUser($name: String!) {
    getUser(name: $name) {
      name
      email
      ProfileUser {
        about
        linkProfiles {
          link {
            name
            icon
          }
          linkUrl
        }
      }
      avatar {
        id
        url
      }
  }
}
`;
