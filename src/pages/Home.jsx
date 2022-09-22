import React from 'react';

// Import CSS
import '../assets/css/home.css';

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

// Import Movies Images
import {
  linkMvOne,
  linkMvTwo,
  linkMvThree,
  linkMvFour,
  linkMvFive,
  linkMvSix,
} from '../assets/index';

// Import Serials Images
import {
  linkSlOne,
  linkSlTwo,
  linkSlThree,
  linkSlFour,
  linkSlFive,
  linkSlSix,
} from '../assets/index';

function Home() {
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
                <a href="./Home.jsx" className="nav-link active">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="./TvShows.jsx" className="nav-link">
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
      <section className="section-banner">
        <div className="container">
          <div className="banner">
            <h1 className="banner__title">Fight Club</h1>
            <div className="banner-info">
              <span className="banner-info__year">2000y.</span>
              <span className="banner-info__age">18+</span>
              <span className="banner-info__time">2h 19min</span>
              <span className="banner-info__rating">8.6</span>
            </div>
            <p className="banner__text">
              The Narrator, an automobile recall specialist, is unfulfilled by his job and
              possessions and suffers from chronic insomnia. To cure this, he attends support
              groups, posing as a sufferer of diseases. His bliss is disturbed when another
              impostor, Marla Singer, begins attending the same groups. The two agree to split which
              groups they attend.
            </p>
            <div className="banner-control">
              <button className="banner-control__btn banner-control__btn-main">Watch</button>
              <button className="banner-control__btn banner-control__btn-more">
                More information
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section__h2">
            <a className="section__h2-link" href="./tvshows.html">
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
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section__h2">
            <div className="section__h2-link" href="./movies.html">
              Trending Movies
            </div>
          </h2>
          <div className="movies">
            <div className="movies-item">
              <div className="movies__link">
                <img className="movies__img" src={linkMvOne} alt="" />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img className="movies__img" src={linkMvTwo} alt="" />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img className="movies__img" src={linkMvThree} alt="" />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img className="movies__img" src={linkMvFour} alt="" />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img className="movies__img" src={linkMvFive} alt="" />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img className="movies__img" src={linkMvSix} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section__serial">
        <div className="container">
          <h2 className="section__h2">
            <a className="section__h2-link" href="./serials.html">
              Trending Serials
            </a>
          </h2>
          <div className="movies">
            <div className="movies-item">
              <div className="movies__link">
                <img className="movies__img" src={linkSlOne} alt="" />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img className="movies__img" src={linkSlTwo} alt="" />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img className="movies__img" src={linkSlThree} alt="" />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img className="movies__img" src={linkSlFour} alt="" />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img className="movies__img" src={linkSlFive} alt="" />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img className="movies__img" src={linkSlSix} alt="" />
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

export default Home;
