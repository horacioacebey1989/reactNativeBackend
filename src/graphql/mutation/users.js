import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation login(
    $email: String!
    $password: String!
    ) {
        login(email: $email, password: $password)
    }
`;

export const REGISTER_MUTATION = gql`
  mutation register(
    $userName: String!
    $email: String!
    $password: String!
    ) {
        register(userName: $userName, email: $email, password: $password)
      }
`;