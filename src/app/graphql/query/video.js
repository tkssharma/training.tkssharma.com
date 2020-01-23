import { gql } from 'apollo-boost';

const Query = gql`
  query getVideoData($id: String) {
    video: getVideoData(id: $id) {
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
