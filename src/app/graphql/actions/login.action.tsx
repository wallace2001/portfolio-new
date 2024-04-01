"use client";
import { DocumentNode, gql } from "@apollo/client";

export const LOGIN_USER: DocumentNode = gql`
  mutation Login($email: String!, $password: String!) {
    Login(
        email: $email
        password: $password
      
    ) {
        user{
            id
            name
            email
            password
            address
            role
            phone_number
          }
          accessToken
          refreshToken
          error{
            message
          }
    }
  }
`;
