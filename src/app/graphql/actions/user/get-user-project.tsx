
"use client";
import { DocumentNode, gql } from "@apollo/client";

export const GET_USER_PROJECTS: DocumentNode = gql`
query getUser($name: String!) {
    getUser(name: $name) {
      ProfileUser {
        ProjectPage {
          title
          description
        }
      }
      Project {
        id
        title
        description
        image {
          url
        }
        content
        createdAt
      }
      avatar {
        id
        url
      }
  }
}
`;
