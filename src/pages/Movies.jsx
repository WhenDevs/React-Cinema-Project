import React from 'react';
import { Link } from 'react-router-dom';

// Import CSS
import '../assets/css/movies.css';

// Import Components
import { Footer, Marketing } from '../components';

// Import Movies Images
import {
    linkMvOne,
    linkMvTwo,
    linkMvThree,
    linkMvFour,
    linkMvFive,
    linkMvSix,
  } from '../assets/index';

function Movies() {
  return (
    <div>
      <header>
        <div className="header">
          <Link className="header-logo" to="/">
            KINOLIFE
          </Link>
          <nav>
            <ul className="nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/tvshows" className="nav-link">
                  TV Shows
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/movies" className="nav-link active">
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/serials" className="nav-link">
                  Serials
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section className="section section-movies">
        <div className="container">
          <h2 className="section__h2">
            <a className="section__h2-link" href="/movies">
              Trending Movies
            </a>
          </h2>
          <div className="movies">
            <div className="movies-item">
              <div className="movies__link">
                <img
                  className="movies__img"
                  src={linkMvOne}
                  alt=""
                />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img
                  className="movies__img"
                  src={linkMvTwo}
                  alt=""
                />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img
                  className="movies__img"
                  src={linkMvThree}
                  alt=""
                />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img
                  className="movies__img"
                  src={linkMvFour}
                  alt=""
                />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img
                  className="movies__img"
                  src={linkMvFive}
                  alt=""
                />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img
                  className="movies__img"
                  src={linkMvSix}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="movies">
            <div className="movies-item">
              <div className="movies__link">
                <img
                  className="movies__img"
                  src={linkMvOne}
                  alt=""
                />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img
                  className="movies__img"
                  src={linkMvTwo}
                  alt=""
                />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img
                  className="movies__img"
                  src={linkMvThree}
                  alt=""
                />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img
                  className="movies__img"
                  src={linkMvFour}
                  alt=""
                />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img
                  className="movies__img"
                  src={linkMvFive}
                  alt=""
                />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img
                  className="movies__img"
                  src={linkMvSix}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="movies">
            <div className="movies-item">
              <div className="movies__link">
                <img
                  className="movies__img"
                  src={linkMvOne}
                  alt=""
                />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img
                  className="movies__img"
                  src={linkMvTwo}
                  alt=""
                />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img
                  className="movies__img"
                  src={linkMvThree}
                  alt=""
                />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img
                  className="movies__img"
                  src={linkMvFour}
                  alt=""
                />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img
                  className="movies__img"
                  src={linkMvFive}
                  alt=""
                />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img
                  className="movies__img"
                  src={linkMvSix}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Marketing />
      <Footer />
    </div>
  );
}

export default Movies;
