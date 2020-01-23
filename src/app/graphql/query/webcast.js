import { gql } from 'apollo-boost';

const Query = gql`
  query getFilterData($name: String) {
    list: getFilterData(name: $name) {
      data {
        _id
        kind
        id
        etag
        snippet {
          channelTitle
          description
          title
          channelId
          publishedAt
          thumbnails {
            standard {
              url
            }
          }
        }
      }
      message
      success
      code
    }
  }
`;

export default Query;
