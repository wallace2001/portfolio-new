import {
    ApolloClient,
    ApolloLink,
    InMemoryCache,
    createHttpLink,
} from "@apollo/client";
  
    const httpLink = createHttpLink({
      uri: process.env.NEXT_PUBLIC_SERVER_URI,
    });
  
    const authMiddleware = new ApolloLink((oparetion, forward) => {
      oparetion.setContext({
        headers: {
          access_token: localStorage.getItem('access_token'),
          refresh_token: localStorage.getItem('refresh_token'),
        },
      });
      return forward(oparetion);
    });
  
    export const graphqlClient = new ApolloClient({
      link: authMiddleware.concat(httpLink),
      cache: new InMemoryCache(),
    });
  