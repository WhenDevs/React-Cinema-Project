import React from "react";

// Import CSS
import "../assets/css/home.css";

// Import TVShows Images
import { linkTvOne, linkTvTwo, linkTvThree, linkTvFour, linkTvFive, linkTvSix }  from "../assets/index";

// Import Movies Images
import { linkMvOne, linkMvTwo, linkMvThree, linkMvFour, linkMvFive, linkMvSix }  from "../assets/index";

// Import Serials Images
import { linkSlOne, linkSlTwo, linkSlThree, linkSlFour, linkSlFive, linkSlSix }  from "../assets/index";

// Import Marketing Images
import { soon, dune } from "../assets/index";


class Home extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <div className="header">
                        <a className="header-logo" href="/#">KINOLIFE</a>
                        <nav>
                            <ul className="nav">
                                <li className="nav-item">
                                    <a className="nav-link active" href="/home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="./tvshows.html">TV Shows</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="./movies.html">Movies</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="./serials.html">Series</a>
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
                                <span className="banner-info__year">2000y.</span
                                ><span className="banner-info__age">18+</span
                                ><span className="banner-info__time">2h 19min</span
                                ><span className="banner-info__rating">8.6</span>
                            </div>
                            <p className="banner__text">
                                The Narrator, an automobile recall specialist, is unfulfilled by his
                                job and possessions and suffers from chronic insomnia. To cure this,
                                he attends support groups, posing as a sufferer of diseases. His
                                bliss is disturbed when another impostor, Marla Singer, begins
                                attending the same groups. The two agree to split which groups they
                                attend.
                            </p>
                            <div className="banner-control">
                                <button className="banner-control__btn banner-control__btn-main">
                                    Watch
                                </button>
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
                            <a className="section__h2-link" href="./tvshows.html">Trending TV Shows</a>
                        </h2>
                        <div className="movies">
                            <div className="movies-item">
                                <a className="movies__link" href="/#"
                                ><img
                                        className="movies__img"
                                        src={linkTvOne}
                                        alt=""
                                    /></a>
                            </div>
                            <div className="movies-item">
                                <a className="movies__link" href="/#"
                                ><img
                                        className="movies__img"
                                        src={linkTvTwo}
                                        alt=""
                                    /></a>
                            </div>
                            <div className="movies-item">
                                <a className="movies__link" href="/#"
                                ><img
                                        className="movies__img"
                                        src={linkTvThree}
                                        alt=""
                                    /></a>
                            </div>
                            <div className="movies-item">
                                <a className="movies__link" href="/#"
                                ><img
                                        className="movies__img"
                                        src={linkTvFour}
                                        alt=""
                                    /></a>
                            </div>
                            <div className="movies-item">
                                <a className="movies__link" href="/#"
                                ><img
                                        className="movies__img"
                                        src={linkTvFive}
                                        alt=""
                                    /></a>
                            </div>
                            <div className="movies-item">
                                <a className="movies__link" href="/#"
                                ><img
                                        className="movies__img"
                                        src={linkTvSix}
                                        alt=""
                                    /></a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <h2 className="section__h2">
                            <a className="section__h2-link" href="./movies.html">Trending Movies</a>
                        </h2>
                        <div className="movies">
                            <div className="movies-item">
                                <a className="movies__link" href="/#"
                                ><img
                                        className="movies__img"
                                        src={linkMvOne}
                                        alt=""
                                    /></a>
                            </div>
                            <div className="movies-item">
                                <a className="movies__link" href="/#"
                                ><img
                                        className="movies__img"
                                        src={linkMvTwo}
                                        alt=""
                                    /></a>
                            </div>
                            <div className="movies-item">
                                <a className="movies__link" href="/#"
                                ><img
                                        className="movies__img"
                                        src={linkMvThree}
                                        alt=""
                                    /></a>
                            </div>
                            <div className="movies-item">
                                <a className="movies__link" href="/#"
                                ><img
                                        className="movies__img"
                                        src={linkMvFour}
                                        alt=""
                                    /></a>
                            </div>
                            <div className="movies-item">
                                <a className="movies__link" href="/#"
                                ><img
                                        className="movies__img"
                                        src={linkMvFive}
                                        alt=""
                                    /></a>
                            </div>
                            <div className="movies-item">
                                <a className="movies__link" href="/#"
                                ><img
                                        className="movies__img"
                                        src={linkMvSix}
                                        alt=""
                                    /></a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section section__serial">
                    <div className="container">
                        <h2 className="section__h2">
                            <a className="section__h2-link" href="./serials.html">Trending Serials</a>
                        </h2>
                        <div className="movies">
                            <div className="movies-item">
                                <a className="movies__link" href="/#"
                                ><img
                                        className="movies__img"
                                        src={linkSlOne}
                                        alt=""
                                    /></a>
                            </div>
                            <div className="movies-item">
                                <a className="movies__link" href="/#"
                                ><img
                                        className="movies__img"
                                        src={linkSlTwo}
                                        alt=""
                                    /></a>
                            </div>
                            <div className="movies-item">
                                <a className="movies__link" href="/#"
                                ><img
                                        className="movies__img"
                                        src={linkSlThree}
                                        alt=""
                                    /></a>
                            </div>
                            <div className="movies-item">
                                <a className="movies__link" href="/#"
                                ><img
                                        className="movies__img"
                                        src={linkSlFour}
                                        alt=""
                                    /></a>
                            </div>
                            <div className="movies-item">
                                <a className="movies__link" href="/#"
                                ><img
                                        className="movies__img"
                                        src={linkSlFive}
                                        alt=""
                                    /></a>
                            </div>
                            <div className="movies-item">
                                <a className="movies__link" href="/#"
                                ><img
                                        className="movies__img"
                                        src={linkSlSix}
                                        alt=""
                                    /></a>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="section">
                    <div className="container">
                        <div className="marketing">
                            <div className="marketing-item">
                                <a className="marketing__link" href="/#"
                                ><img
                                        className="marketing__img"
                                        src={dune}
                                        alt=""
                                    /></a>
                            </div>
                            <div className="marketing-item">
                                <a className="marketing__link" href="/#"
                                ><img
                                        className="marketing__img"
                                        src={soon}
                                        alt=""
                                    /></a>
                            </div>
                        </div>
                    </div>
                </section>


                <footer>
                    <div className="footer">
                        <div className="footer-item">
                            <a className="footer-logo" href="/#">KINOLIFE</a>
                        </div>
                        <div className="footer-item">
                            <ul className="footer-list">
                                <li className="footer-list__item">
                                    <a className="footer-list__link" href="/#">Voice over and Subtitle</a>
                                </li>
                                <li className="footer-list__item">
                                    <a className="footer-list__link" href="/#">Media Center </a>
                                </li>
                                <li className="footer-list__item">
                                    <a className="footer-list__link" href="/#">Privacy</a>
                                </li>
                                <li className="footer-list__item">
                                    <a className="footer-list__link" href="/#">Contact us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-item">
                            <ul className="footer-list">
                                <li className="footer-list__item">
                                    <a className="footer-list__link" href="/#">Voice over and Subtitle</a>
                                </li>
                                <li className="footer-list__item">
                                    <a className="footer-list__link" href="/#">Investor Relations</a>
                                </li>
                                <li className="footer-list__item">
                                    <a className="footer-list__link" href="/#">Legal Provisions</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-item">
                            <ul className="footer-list">
                                <li className="footer-list__item">
                                    <a className="footer-list__link" href="/#">Help Center</a>
                                </li>
                                <li className="footer-list__item">
                                    <a className="footer-list__link" href="/#">Job Opportunities</a>
                                </li>
                                <li className="footer-list__item">
                                    <a className="footer-list__link" href="/#">Cookies Preferences</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-item">
                            <ul className="footer-list">
                                <li className="footer-list__item">
                                    <a className="footer-list__link" href="/#">Gift Cards</a>
                                </li>
                                <li className="footer-list__item">
                                    <a className="footer-list__link" href="/#">Terms of Use </a>
                                </li>
                                <li className="footer-list__item">
                                    <a className="footer-list__link" href="/#">Corporate Informations</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        );

    };
}

export default Home;