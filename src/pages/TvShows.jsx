import React from 'react';

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
          <a className="header-logo" href="/#">
            KINOLIFE
          </a>
          <nav>
            <ul className="nav">
              <li className="nav-item">
                <a href="./Home.jsx" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="./TvShows.jsx" className="nav-link active">
                  TV Shows
                </a>
              </li>
              <li className="nav-item">
                <a href="/#" className="nav-link">
                  Movies
                </a>
              </li>
              <li className="nav-item">
                <a href="/#" className="nav-link">
                  Serials
                </a>
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
