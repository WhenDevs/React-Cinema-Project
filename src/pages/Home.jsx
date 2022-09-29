import React from 'react';
import { Link } from 'react-router-dom';

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

import Modal from "../components/Modal/Modal";

function Home() {


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
                <Link to="/" className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/tvshows" className="nav-link">
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
            <Modal/>
          </div>
        </div>
      </section>


      <section className="section">
        <div className="container">
          <h2 className="section__h2">
            <Link className="section__h2-link" to="/tvshows">
              Trending TV Shows
            </Link>
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
            <Link className="section__h2-link" to="/movies">
              Trending Movies
            </Link>
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
            <Link className="section__h2-link" to="/serials">
              Trending Serials
            </Link>
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
