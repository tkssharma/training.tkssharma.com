import { gql } from 'apollo-boost';

const loginQuery = gql`
  mutation login($email: String!, $password: String!) {
    loginData: login(email: $email, password: $password) {
      token
    }
  }
`;

export default loginQuery;
