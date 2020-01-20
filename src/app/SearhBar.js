import React, { useState, Fragment, useRef } from 'react';
const SearchBar = () => {
  const inputRef = useRef(null);
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState('');

  const [dropdown, setDropDown] = useState(false);
  const setKeywordInInput = () => {
    setKeyword(inputRef.current.value);
    if (inputRef.current.value.length > 3) {
      getTmdbApi();
      setDropDown(true);
    }
  };

  const getTmdbApi = async () => {
    try {
      const response = await fetch(
        `/api/movieAutocomplete?q=${keyword.toLowerCase()}`,
      );
      const json = await response.json();
      setData(json);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  };
  const closeDropdown = () => {
    setDropDown(false);
    setKeyword('');
  };
  const getDropdown = () => {
    const dropdown = (
      <Fragment>
        {data && data.total_results >= 1 ? (
          data.results.slice(0, 5).map(result => (
            <a
              key={result.id + 'a'}
              href={`/movie/${result.id}`}
              className="text-decoration-none"
            >
              <li
                key={result.id + 'li'}
                className="my-1 text-nowrap d-inline-block text-truncate result-list-width"
              >
                {result.poster_path ? (
                  <img
                    alt={result.title}
                    key={result.id + 'img'}
                    src={`https://image.tmdb.org/t/p/w45${result.poster_path}`}
                  />
                ) : (
                  <svg width="45" height="68">
                    <circle cx="45" cy="45" r="45" fill="#D5D8DC" />
                    Sorry, your browser does not support inline SVG.
                  </svg>
                )}
                <span key={result.id + 'span'} className="mx-1">
                  {result.title} (
                  {result.release_date
                    ? result.release_date.match(/[0-9]{4}/)
                    : 'unknown'}
                  )
                </span>
              </li>
            </a>
          ))
        ) : (
          <li className="my-1 text-nowrap d-inline-block text-truncate result-list-width">
            <span className="mx-1">no results found...</span>
          </li>
        )}
      </Fragment>
    );
    return dropdown;
  };
  const getDropdownOverlay = () => {
    const overlay = (
      <div
        id="dropdownOverlay"
        onClick={closeDropdown}
        className="overlay-style"
      ></div>
    );
    return overlay;
  };

  return (
    <Fragment>
      <div className="position-relative" style={{ zIndex: 1 }}>
        <input
          className="form-control mt-2"
          type="text"
          ref={inputRef}
          placeholder="Type a movie name…"
          value={keyword}
          onChange={setKeywordInInput}
        />
        {data ? (
          <Fragment>
            {dropdown ? (
              <div className="bg-light w-auto text-dark position-absolute py-2 px-2">
                <ul className="list-unstyled mb-0">{getDropdown()}</ul>
                {getDropdownOverlay()}
              </div>
            ) : null}
          </Fragment>
        ) : null}
      </div>
    </Fragment>
  );
};

export default SearchBar;
