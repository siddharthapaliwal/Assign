import React from 'react';
import Footer from './Footer';
import BLOG from './components/BLOG';

const Home = () => {
    return (

        <div>
            {/* <Menu /> */}
            <header className="header" id='home'>
                <div>
                    <div className="header-top">
                        <div className="container" style={{ backgroundColor: 'black' }}>
                            <div className="row justify-content-end">
                                <div className="col-lg-8 col-sm-4 col-8 header-top-right no-padding">
                                    <ul>
                                        <li>
                                            Mon-Fri: 8am to 2pm
                                        </li>
                                        <li>
                                            Sat-Sun: 11am to 4pm
                                        </li>
                                        <li>
                                            <a href="tel:(012) 6985 236 7512">(012) 6985 236 7512</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container" style={{ backgroundColor: 'black', width: '100%' }}>
                    <div className="row align-items-center justify-content-between d-flex">
                        <div id="logo">
                            <a href="index.html"><img src="./assets/img/logo.png" alt="" title="" /></a>
                        </div>
                        <nav id="nav-menu-container">
                            <ul className="nav-menu">
                                <li className="menu-active">
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/About">About</a>
                                </li>
                                <li>
                                    <a href="/coffee">Coffee</a>
                                </li>
                                <li>
                                    <a href="/Review">Review</a>
                                </li>
                                <li>
                                    <a href="/jadav" >Blog</a>
                                </li>
                                <li className="menu-has-children">
                                    <a href="">Pages</a>
                                    <ul>
                                        <li><a href="generic.html">Generic</a></li>
                                        <li><a href="elements.html">Elements</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="/Login">Login</a>
                                </li>
                            </ul>
                        </nav>
                        {/* <!-- #nav-menu-container --> */}
                    </div>
                </div>
                <img src="./assets/img/header-bg.jpg" alt="backgroudImage" width="100%" height="600px" />
            </header>
            <section className="banner-area" id="home">
                <div className="container">
                    <div className="row fullscreen d-flex align-items-center justify-content-start">
                        <div className="banner-content col-lg-7">
                            <h6 className="text-white text-uppercase">Now you can feel the Energy</h6>
                            <h1>
                                Start your day with <br />
                                a black Coffee
                            </h1>
                            <a href="#" className="primary-btn text-uppercase">Buy Now</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="video-sec-area pb-100 pt-40" id="about">
                <div className="container">
                    <div className="row justify-content-start align-items-center">
                        <div className="col-lg-6 video-right justify-content-center align-items-center d-flex">
                            <div className="overlay overlay-bg"></div>
                            <a className="play-btn" href="https://www.youtube.com/watch?v=ARA0AxrnHdM"><img className="img-fluid"
                                src="assets/img/play-icon.png" alt="" /></a>
                        </div>
                        <div className="col-lg-6 video-left">
                            <h6>Live Coffee making process.</h6>
                            <h1>We Telecast our <br />
                                Coffee Making Live</h1>
                            <p><span>We are here to listen from you deliver exellence</span></p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim.
                            </p>
                            <img className="img-fluid" src="assets/img/signature.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End video-sec Area -->

            <!-- Start menu Area --> */}
            <section className="menu-area section-gap" id="coffee">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="menu-content pb-60 col-lg-10">
                            <div className="title text-center">
                                <h1 className="mb-10">What kind of Coffee we serve for you</h1>
                                <p>Who are in extremely love with eco friendly system.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="single-menu">
                                <div className="title-div justify-content-between d-flex">
                                    <h4>Cappuccino</h4>
                                    <p className="price float-right">
                                        $49
                                    </p>
                                </div>
                                <p>
                                    Usage of the Internet is becoming more common due to rapid advance.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="single-menu">
                                <div className="title-div justify-content-between d-flex">
                                    <h4>Americano</h4>
                                    <p className="price float-right">
                                        $49
                                    </p>
                                </div>
                                <p>
                                    Usage of the Internet is becoming more common due to rapid advance.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="single-menu">
                                <div className="title-div justify-content-between d-flex">
                                    <h4>Espresso</h4>
                                    <p className="price float-right">
                                        $49
                                    </p>
                                </div>
                                <p>
                                    Usage of the Internet is becoming more common due to rapid advance.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="single-menu">
                                <div className="title-div justify-content-between d-flex">
                                    <h4>Macchiato</h4>
                                    <p className="price float-right">
                                        $49
                                    </p>
                                </div>
                                <p>
                                    Usage of the Internet is becoming more common due to rapid advance.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="single-menu">
                                <div className="title-div justify-content-between d-flex">
                                    <h4>Mocha</h4>
                                    <p className="price float-right">
                                        $49
                                    </p>
                                </div>
                                <p>
                                    Usage of the Internet is becoming more common due to rapid advance.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="single-menu">
                                <div className="title-div justify-content-between d-flex">
                                    <h4>Coffee Latte</h4>
                                    <p className="price float-right">
                                        $49
                                    </p>
                                </div>
                                <p>
                                    Usage of the Internet is becoming more common due to rapid advance.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="single-menu">
                                <div className="title-div justify-content-between d-flex">
                                    <h4>Piccolo Latte</h4>
                                    <p className="price float-right">
                                        $49
                                    </p>
                                </div>
                                <p>
                                    Usage of the Internet is becoming more common due to rapid advance.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="single-menu">
                                <div className="title-div justify-content-between d-flex">
                                    <h4>Ristretto</h4>
                                    <p className="price float-right">
                                        $49
                                    </p>
                                </div>
                                <p>
                                    Usage of the Internet is becoming more common due to rapid advance.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="single-menu">
                                <div className="title-div justify-content-between d-flex">
                                    <h4>Affogato</h4>
                                    <p className="price float-right">
                                        $49
                                    </p>
                                </div>
                                <p>
                                    Usage of the Internet is becoming more common due to rapid advance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End menu Area -->

            <!-- Start gallery Area --> */}
            <section className="gallery-area section-gap" id="gallery">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="menu-content pb-60 col-lg-10">
                            <div className="title text-center">
                                <h1 className="mb-10">What kind of Coffee we serve for you</h1>
                                <p>Who are in extremely love with eco friendly system.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <a href="img/g1.jpg" className="img-pop-home">
                                <img className="img-fluid" src="assets/img/g1.jpg" alt="" />
                            </a>
                            <a href="img/g2.jpg" className="img-pop-home">
                                <img className="img-fluid" src="assets/img/g2.jpg" alt="" />
                            </a>
                        </div>
                        <div className="col-lg-8">
                            <a href="img/g3.jpg" className="img-pop-home">
                                <img className="img-fluid" src="assets/img/g3.jpg" alt="" />
                            </a>
                            <div className="row">
                                <div className="col-lg-6">
                                    <a href="img/g4.jpg" className="img-pop-home">
                                        <img className="img-fluid" src="assets/img/g4.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="col-lg-6">
                                    <a href="img/g5.jpg" className="img-pop-home">
                                        <img className="img-fluid" src="assets/img/g5.jpg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End gallery Area -->

            <!-- Start review Area --> */}
            <section className="review-area section-gap" id="Review">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="menu-content pb-60 col-lg-10">
                            <div className="title text-center">
                                <h1 className="mb-10">What kind of Coffee we serve for you</h1>
                                <p>Who are in extremely love with eco friendly system.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 single-review">
                            <img src="assets/img/r1.png" alt="" />
                            <div className="title d-flex flex-row">
                                <h4>lorem ipusm</h4>
                                <div className="star">
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                            </div>
                            <p>
                                Accessories Here you can find the best computer accessory for your laptop, monitor, printer,
                                scanner, speaker. Here you can find the best computer accessory for your laptop, monitor,
                                printer, scanner, speaker.
                            </p>
                        </div>
                        <div className="col-lg-6 col-md-6 single-review">
                            <img src="assets/img/r2.png" alt="" />
                            <div className="title d-flex flex-row">
                                <h4>lorem ipusm</h4>
                                <div className="star">
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                            </div>
                            <p>
                                Accessories Here you can find the best computer accessory for your laptop, monitor, printer,
                                scanner, speaker. Here you can find the best computer accessory for your laptop, monitor,
                                printer, scanner, speaker.
                            </p>
                        </div>
                    </div>
                    <div className="row counter-row">
                        <div className="col-lg-3 col-md-6 single-counter">
                            <h1 className="counter">2536</h1>
                            <p>Happy Client</p>
                        </div>
                        <div className="col-lg-3 col-md-6 single-counter">
                            <h1 className="counter">7562</h1>
                            <p>Total Projects</p>
                        </div>
                        <div className="col-lg-3 col-md-6 single-counter">
                            <h1 className="counter">2024</h1>
                            <p>Cups Coffee</p>
                        </div>
                        <div className="col-lg-3 col-md-6 single-counter">
                            <h1 className="counter">10536</h1>
                            <p>Total Submitted</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End review Area -->

            <!-- Start blog Area --> */}
            <section className="blog-area section-gap" id="Blog">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="menu-content pb-60 col-lg-10">
                            <div className="title text-center">
                                <h1 className="mb-10">What kind of Coffee we serve for you</h1>
                                <p>Who are in extremely love with eco friendly system.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 single-blog">
                            <img className="img-fluid" src="assets/img/b1.jpg" alt="" />
                            <ul className="post-tags">
                                <li><a href="#">Travel</a></li>
                                <li><a href="#">Life Style</a></li>
                            </ul>
                            <a href="#">
                                <h4>Portable latest Fashion for young women</h4>
                            </a>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore.
                            </p>
                            <p className="post-date">
                                31st January, 2024
                            </p>
                        </div>
                        <div className="col-lg-6 col-md-6 single-blog">
                            <img className="img-fluid" src="assets/img/b2.jpg" alt="" />
                            <ul className="post-tags">
                                <li><a href="#">Travel</a></li>
                                <li><a href="#">Life Style</a></li>
                            </ul>
                            <a href="#">
                                <h4>Portable latest Fashion for young women</h4>
                            </a>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore.
                            </p>
                            <p className="post-date">
                                31st January, 2024
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End blog Area -->


	<!-- start footer Area --> */}
            <Footer />
        </div>
    )
}

export default Home;
