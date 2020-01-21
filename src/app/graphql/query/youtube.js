import { gql } from 'apollo-boost';

const Query = gql`
  query getYoutube {
    list: getYoutube {
      data {
        _id
        ID
        DurationInSeconds
        Title
        ShortDescription
        Description
        WelcomeVideoId
      }
      message
      success
      code
    }
  }
`;

export default Query;
