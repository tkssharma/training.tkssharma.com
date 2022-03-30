import React, { Fragment } from 'react';
import VideoQuery from '../graphql/query/video';
import { Query } from 'react-apollo';
import VideoList from './VideoList';
import { getMockData } from './utils';

export const YouTubePage = ({ data }) => {
  const url = data?.snippet?.thumbnails?.standard?.url;
  const title = data?.snippet?.title;
  const description = data?.snippet?.description;
  const items = data?.items;
  const id = data?.id;
  return (
    <Fragment>
      <section className="hero-technology">
        <div className="container">
          <div className="title-holder">
            <div className="tech-logo-holder">
              <img alt="Angular2" className="tech-logo" src={url} />
              <h3 className="tech-title">{title}</h3>
            </div>
            <div className="slogan-holder">
              <h3 className="slogan"></h3>
            </div>
          </div>
          <div> {description && description.substr(0, 300)}</div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h3 className="text-center">YouTube training Videos.</h3>
          <div className="lesson-without-playlist-holder">
            <div className="lessons-frame-holder">
              <div className="lessons-frame ">
                <section className="section text-center">
                  <div className="container videoWrapper">
                    <iframe
                      height="600px"
                      width="1100px"
                      frameBorder="0"
                      allowFullScreen=""
                      src={`https://www.youtube.com/embed/videoseries?list=${id}`}
                    ></iframe>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-browse-all-lessons">
        <div className="container">
          <div className="title-subtitle-block">
            <h2 className="title">Browse all lessons.</h2>
            <p className="subtitle">
              <i>showing All series lessons...</i>
            </p>
          </div>
          <div className="browse-all-lessons-holder">
            <div className="tool-bar">
              <ul className="list-unstyled list-inline actions-list">
                <li>
                  <small>
                    <a className="filter-trigger active" href="#">
                      Latest first
                    </a>
                  </small>
                </li>
                <li>
                  <small>
                    <a
                      className="filter-trigger"
                      href="/technologies/node?order=ASC"
                    >
                      Oldest first
                    </a>
                  </small>
                </li>
              </ul>

              <div className="btn-group view-switchers-holder">
                <a
                  id="select-list"
                  role="tab"
                  data-toggle="tab"
                  className="btn btn-default btn-view-switcher active"
                >
                  <i className="icon icon-list-ol"></i>
                </a>
                <a
                  id="select-thumbs"
                  role="tab"
                  data-toggle="tab"
                  className="btn btn-default btn-view-switcher"
                >
                  <i className="icon icon-th"></i>
                </a>
              </div>
            </div>
            <VideoList items={items} />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

const Webcast = ({ match }) => {
  const { id } = match.params;
  return (
    <Query query={VideoQuery} fetchPolicy="no-cache" variables={{ id }}>
      {({ data, loading }) => {
        if (loading) return null;
        // in development return detail p[age even if query fails ]
        if (!data || !data.video) return <YouTubePage data={getMockData(id)} />;
        return <YouTubePage data={data.video && data.video.data} />;
      }}
    </Query>
  );
};

export default Webcast;
