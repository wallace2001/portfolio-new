
import request, { gql } from 'graphql-request';

export const getUser = async () => {
    try {
      const endpoint = process.env.NEXT_PUBLIC_SERVER_URI!;
      const mutation = gql`
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

      const response = await request(endpoint, mutation, { name: 'Wallace' });

      return response?.getUser;
    } catch (err) {
      console.log("ERROR DURING FETCH REQUEST", err);
    }
};

export const getUserAbout = async () => {
  try {

    const endpoint = process.env.NEXT_PUBLIC_SERVER_URI!;
    const mutation = gql`
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
    const response = await request(endpoint, mutation, { name: 'Wallace' });

    return response?.getUser;
  } catch (err) {
    console.log("ERROR DURING FETCH REQUEST", err);
  }
};
  
export const getUserContact = async () => {
  try {
    const endpoint = process.env.NEXT_PUBLIC_SERVER_URI!;
    const mutation = gql`
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
    const response = await request(endpoint, mutation, { name: 'Wallace' });

    return response?.getUser;
  } catch (err) {
    console.log("ERROR DURING FETCH REQUEST", err);
  }
};

export const getUserProject = async () => {
  try {
    const endpoint = process.env.NEXT_PUBLIC_SERVER_URI!;
    const mutation = gql`
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
    const response = await request(endpoint, mutation, { name: 'Wallace' });

    return response?.getUser;
  } catch (err) {
    console.log("ERROR DURING FETCH REQUEST", err);
  }
};