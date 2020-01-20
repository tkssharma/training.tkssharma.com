import { gql } from 'apollo-boost';

const Query = gql`
  query user {
    user: user {
      email
      first_name
      last_name
      username
    }
  }
`;

export default Query;
