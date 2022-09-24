import React from 'react';
import { Link } from 'react-router-dom';

// Import CSS
import '../assets/css/serials.css';

// Import Components
import { Footer, Marketing } from '../components';

// Import Serials Images
import {
    linkSlOne,
    linkSlTwo,
    linkSlThree,
    linkSlFour,
    linkSlFive,
    linkSlSix,
  } from '../assets/index';
  

function Serials() {
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
                <Link to="/movies" className="nav-link">
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/serials" className="nav-link active">
                  Serials
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section className="section section__serial">
        <div className="container">
          <h2 className="section__h2">
            <a className="section__h2-link" href="/serials">
              Trending Serials
            </a>
          </h2>
          <div className="movies">
            <div className="movies-item">
              <div className="movies__link">
                <img
                  className="movies__img"
                  src={linkSlOne}
                  alt=""
                />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img
                  className="movies__img"
                  src={linkSlTwo}
                  alt=""
                />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img
                  className="movies__img"
                  src={linkSlThree}
                  alt=""
                />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img
                  className="movies__img"
                  src={linkSlFour}
                  alt=""
                />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img
                  className="movies__img"
                  src={linkSlFive}
                  alt=""
                />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img
                  className="movies__img"
                  src={linkSlSix}
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
                  src={linkSlOne}
                  alt=""
                />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img
                  className="movies__img"
                  src={linkSlTwo}
                  alt=""
                />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img
                  className="movies__img"
                  src={linkSlThree}
                  alt=""
                />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img
                  className="movies__img"
                  src={linkSlFour}
                  alt=""
                />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img
                  className="movies__img"
                  src={linkSlFive}
                  alt=""
                />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img
                  className="movies__img"
                  src={linkSlSix}
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
                  src={linkSlOne}
                  alt=""
                />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img
                  className="movies__img"
                  src={linkSlTwo}
                  alt=""
                />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img
                  className="movies__img"
                  src={linkSlThree}
                  alt=""
                />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img
                  className="movies__img"
                  src={linkSlFour}
                  alt=""
                />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img
                  className="movies__img"
                  src={linkSlFive}
                  alt=""
                />
              </div>
            </div>
            <div className="movies-item">
              <div className="movies__link">
                <img
                  className="movies__img"
                  src={linkSlSix}
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

export default Serials;
