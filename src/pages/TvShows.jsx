import React from 'react';
import { Link } from 'react-router-dom';
// Import CSS
import '../assets/css/tvshows.css';

// Import Components
import { Footer, Marketing } from "../components";

// Import TVShows Images
import {
  linkTvOne,
  linkTvTwo,
  linkTvThree,
  linkTvFour,
  linkTvFive,
  linkTvSix,
} from '../assets/index';

function TvShows() {
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
                <Link to="/tvshows" className="nav-link active">
                  TV Shows
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/movies" className="nav-link">
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
      <section className="section section-tvshows">
        <div className="container">
          <h2 className="section__h2">
            <a href="/#" className="section__h2-link">
              Trending TV Shows
            </a>
          </h2>
          <div className="movies">
            <div className="movies-item">
              <div className="movies__link">
                <img className="movies__img" src={linkTvOne} alt="" />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img className="movies__img" src={linkTvTwo} alt="" />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img className="movies__img" src={linkTvThree} alt="" />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img className="movies__img" src={linkTvFour} alt="" />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img className="movies__img" src={linkTvFive} alt="" />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img className="movies__img" src={linkTvSix} alt="" />
              </div>
            </div>
          </div>
          <div className="movies">
            <div className="movies-item">
              <div className="movies__link">
                <img className="movies__img" src={linkTvOne} alt="" />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img className="movies__img" src={linkTvTwo} alt="" />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img className="movies__img" src={linkTvThree} alt="" />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img className="movies__img" src={linkTvFour} alt="" />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img className="movies__img" src={linkTvFive} alt="" />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img className="movies__img" src={linkTvSix} alt="" />
              </div>
            </div>
          </div>
          <div className="movies">
            <div className="movies-item">
              <div className="movies__link">
                <img className="movies__img" src={linkTvOne} alt="" />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img className="movies__img" src={linkTvTwo} alt="" />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img className="movies__img" src={linkTvThree} alt="" />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img className="movies__img" src={linkTvFour} alt="" />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img className="movies__img" src={linkTvFive} alt="" />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img className="movies__img" src={linkTvSix} alt="" />
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

export default TvShows;
