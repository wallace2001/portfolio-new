"use client";
import { DocumentNode, gql } from "@apollo/client";

export const SEND_CONTACT: DocumentNode = gql`
  mutation sendContact($sendContactDto: SendContactDto!) {
    sendContact(
      sendContactDto: $sendContactDto
    ) {
        message
    }
  }
`;
