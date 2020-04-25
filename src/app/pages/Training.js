import React from 'react';
import ScreenCastQuery from '../graphql/query/webcast';
import { Query } from 'react-apollo';
import { Mock } from '../graphql/mock/index';
import { getTrainingData} from './utils'
export const WebcastPage = ({ data }) => {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="title-subtitle-block">
            <h2 className="title">
              Screencast on Angular 2.0/React and Front and framework ..
            </h2>
          </div>

          <div className="row block-lessons-series">
            {data &&
              data.map((i, index) => {
                const url = i.snippet?.thumbnails?.standard?.url;
                const title = i.snippet?.title;
                const description = i.snippet?.description;
                return (
                  <div key={index} className="col-sm-6 item">
                    <a href="#">
                      <div className="media-holder">
                        <img
                          src={url}
                          alt="training"
                          className="img-responsive img-admin-tech-logo"
                        />
                      </div>
                    </a>
                    <div className="media-subscription-holder">
                      <div className="media">
                        <h3 className="title">
                          <a href="#">
                            <h4>{title}</h4>
                          </a>
                        </h3>
                      </div>
                      <small className="description">
                        <h6>{description && description.substr(0, 100)}</h6>
                      </small>
                      <div className="info-line">
                        <small className="folder">
                          <i className="icon-play-circle">
                            <a href="#"> Watch Now with detailed sessions </a>
                          </i>
                        </small>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
};

const Webcast = () => {
  return (
    <Query
      query={ScreenCastQuery}
      fetchPolicy="no-cache"
      variables={{ name: 'training' }}
    >
      {({ data, loading }) => {
        if (loading) return <WebcastPage data={null} />;
        // in development return detail p[age even if query fails ]
        if (!data || !data.list)
          return <WebcastPage data={getTrainingData()} />;
        return (
          <WebcastPage data={data.list && data.list.data} loading={false} />
        );
      }}
    </Query>
  );
};

export default Webcast;
