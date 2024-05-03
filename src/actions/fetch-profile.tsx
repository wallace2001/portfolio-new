
import axios from "axios";

export const getUser = async () => {
    try {
      const headers = {
        "content-type": "application/json",
      };
      const requestBody = {
        query: `query getUser($name: String!) {
            getUser(name: $name) {
              name
              email
    					ProfileUser {
                title
                description
                about
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
        }`,
        variables: { name: 'Wallace' },
      };
      const response = await axios.post(process.env.NEXT_PUBLIC_SERVER_URI!, JSON.stringify(requestBody), {
        headers: headers
      });  
      return response?.data.data.getUser;
    } catch (err) {
      console.log("ERROR DURING FETCH REQUEST", err);
    }
};

export const getUserAbout = async () => {
  try {
    const headers = {
      "content-type": "application/json",
    };
    const requestBody = {
      query: `query getUser($name: String!) {
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
      }`,
      variables: { name: 'Wallace' },
    };
    const response = await axios.post(process.env.NEXT_PUBLIC_SERVER_URI!, JSON.stringify(requestBody), {
      headers: headers
    });  
    return response?.data.data.getUser;
  } catch (err) {
    console.log("ERROR DURING FETCH REQUEST", err);
  }
};
  
export const getUserContact = async () => {
  try {
    const headers = {
      "content-type": "application/json",
    };
    const requestBody = {
      query: `query getUser($name: String!) {
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
      }`,
      variables: { name: 'Wallace' },
    };
    const response = await axios.post(process.env.NEXT_PUBLIC_SERVER_URI!, JSON.stringify(requestBody), {
      headers: headers
    });  
    return response?.data.data.getUser;
  } catch (err) {
    console.log("ERROR DURING FETCH REQUEST", err);
  }
};

export const getUserProject = async () => {
  try {
    const headers = {
      "content-type": "application/json",
    };
    const requestBody = {
      query: `query getUser($name: String!) {
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
      }`,
      variables: { name: 'Wallace' },
    };
    const response = await axios.post(process.env.NEXT_PUBLIC_SERVER_URI!, JSON.stringify(requestBody), {
      headers: headers
    });  
    return response?.data.data.getUser;
  } catch (err) {
    console.log("ERROR DURING FETCH REQUEST", err);
  }
};