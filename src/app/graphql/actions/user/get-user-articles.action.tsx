"use client";
import { DocumentNode, gql } from "@apollo/client";

export const GET_USER_ARTICLES: DocumentNode = gql`
query getUser($name: String!) {
    getUser(name: $name) {
      name
      email
      Article {
        id
        title
        description
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
