import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../images/default.png';

const HomepageWrapper = ({ data }) => {
  return (
    <Fragment>
      <section className="hero">
        <div className="container">
          <div className="logo-holder">
            <a href="#!/web">
              <img alt="Tech logo angular" src="img/angular.svg" />
            </a>{' '}
            <a href="#!/web">
              <img alt="React" src="img/react.svg" />
            </a>{' '}
            <a href="#!/web">
              <img alt="Js" src="img/javascript.svg" />
            </a>{' '}
            <a href="#!/web">
              <img alt="Tech logo d3" src="img/d3.svg" />
            </a>{' '}
            <a href="#!/web">
              <img alt="Es6" src="img/jss.svg" />
            </a>
          </div>

          <h1 className="mega title">
            GenNext Training to deliver project based learning to give you the
            head start you need as a developer
          </h1>

          <p className="subtitle">
            Level up your programming skills today with condensed video lessons
            on industry leading web frameworks and tools!
          </p>
          <a
            id="signup"
            href="#!/all"
            className="custom-btn custom-btn-red custom-btn-primary"
          >
            Unlock the Knowledge
          </a>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row block-lessons-series">
            {data &&
              data.data &&
              data.data.map((i, index) => {
                const url = i.snippet?.thumbnails?.standard?.url;
                const title =
                  i.snippet?.title && i.snippet?.title.substr(0, 50);
                return (
                  <div key={index} className="col-sm-6 item">
                    <div className="media-holder">
                      <Link to={`youtube/${i.id}`}>
                        <img
                          alt=""
                          src={url || banner}
                          className="img-responsive"
                        />
                      </Link>
                    </div>

                    <div className="media-subscription-holder">
                      <h3 className="title">
                        <h4>{title}</h4>
                      </h3>
                      <div className="info-line">
                        <small className="folder">
                          <i className="icon-folder-open-alt"></i>
                          <Link to={`/youtube/${i.id}`}>
                            watch Training Videos On YouTube
                          </Link>
                        </small>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default HomepageWrapper;
