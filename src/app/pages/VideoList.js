import React, { useEffect } from 'react';
const Videos = ({ items }) => {

  return (
    <div className="tab-content view-tabs-holder">
      <div className="tab-pane tab-view-list active" id="lesson-list">
        <div className="series-lessons-holder">
          <div className="table-responsive">
            <table className="table table-condensed">
              <tbody>
                {items && items.map((i, index) => {
                  return (
                    <tr key={index}><td>{i?.snippet?.title}</td></tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="pagination-holder text-center">
          <ul className="pagination pagination">
            <li className="prev disabled">
              <span>Previous</span>
            </li>{' '}
            <li className="active">
              <span>1</span>
            </li>{' '}
            <li>
              <a rel="next" href="/technologies/node?order=desc&amp;page=2">
                2
              </a>
            </li>{' '}
            <li>
              <a href="/technologies/node?order=desc&amp;page=3">3</a>
            </li>{' '}
            <li className="next">
              <a rel="next" href="/technologies/node?order=desc&amp;page=2">
                Next
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Videos;
