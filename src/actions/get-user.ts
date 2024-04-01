
export const getUserById = async (userId: string) => {
  try {
    if (!userId) {
      return;
    }

    const headers = {
      "content-type": "application/json",
    };
    const requestBody = {
      query: `query getUserById($userId: String!) {
        getUserById(userId: $userId) {
          user {
            id
            name
            email
            address
            role
            password
          }
        }
      }`,
      variables: { userId },
    };
    const options = {
      method: "POST",
      headers,
      body: JSON.stringify(requestBody),
    };
    const response = await (
      await fetch(process.env.NEXT_PUBLIC_SERVER_URI!, options)
    ).json();

    return response?.data.getUserById.user;
  } catch (err) {
    console.log("ERROR DURING FETCH REQUEST", err);
  }
};

export const getUserByEmail = async (email: string) => {
  try {
    if (!email) {
      return;
    }

    const headers = {
      "content-type": "application/json",
    };
    const requestBody = {
      query: `query getUserByEmail($email: String!) {
        getUserByEmail(email: $email) {
          user {
            id
            name
            email
            address
            role
            password
          }
        }
      }`,
      variables: { email },
    };
    const options = {
      method: "POST",
      headers,
      body: JSON.stringify(requestBody),
    };
    const response = await (
      await fetch(process.env.NEXT_PUBLIC_SERVER_URI!, options)
    ).json();

    return response?.data.getUserByEmail.user;
  } catch (err) {
    console.log("ERROR DURING FETCH REQUEST", err);
  }
};
