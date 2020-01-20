import { gql } from 'apollo-boost';

const RegisterQuery = gql`
  mutation register($email: String!, $username: String!, $password: String!) {
    data: register(email: $email, username: $username, password: $password) {
      success
      code
      message
    }
  }
`;

export default RegisterQuery;
