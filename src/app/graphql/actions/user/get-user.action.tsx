"use client";
import { DocumentNode, gql } from "@apollo/client";

export const GET_USER: DocumentNode = gql`
query getUser($name: String!) {
    getUser(name: $name) {
      name
      email
      ProfileUser {
        title
        description
        about
        Curriculum {
          url
        }
        techs {
          name
          icon
        }
        links {
          name
          icon
        }
        linkProfiles {
          link {
            name
            icon
          }
          linkUrl
        }
        experiences {
          name
          date {
            from
            to
          }
        }
      }
      Project {
        title
        description
        image {
          url
        }
        content
        createdAt
      }
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
