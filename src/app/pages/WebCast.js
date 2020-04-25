import React from 'react';
import ScreenCastQuery from '../graphql/query/webcast';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import { getWebcastData } from './utils';
import banner from '../../images/default.png';
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
                return (
                  <div key={index} className="col-sm-6 item">
                    <Link to={`/youtube/${i.id}`}>
                      <div className="media-holder">
                        <img
                          src={url || banner}
                          alt="training"
                          className="img-responsive img-admin-tech-logo"
                        />
                      </div>
                    </Link>
                    <div className="media-subscription-holder">
                      <div className="media">
                        <h3 className="title">
                          <Link to={`/youtube/${i.id}`}>
                            <h4>{title}</h4>
                          </Link>
                        </h3>
                      </div>
                      <small className="description"></small>
                      <div className="info-line">
                        <small className="folder">
                          <i className="icon-play-circle">
                            <Link to={`/youtube/${i.id}`}>
                              Watch Now with detailed sessions{' '}
                            </Link>
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

const Webcast = ({ match }) => {
  const { name } = match.params;
  return (
    <Query
      query={ScreenCastQuery}
      fetchPolicy="no-cache"
      variables={{ name: name }}
    >
      {({ data, loading }) => {
        if (loading) return <WebcastPage data={null} />;
        // in development return detail p[age even if query fails ]
        if (!data || !data.list)
          return <WebcastPage data={getWebcastData(name)} />;
        return (
          <WebcastPage
            name={name}
            data={data.list && data.list.data}
            loading={false}
          />
        );
      }}
    </Query>
  );
};

export default Webcast;
