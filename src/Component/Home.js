import React, { Component } from "react";
import CategoryTab from "./CategoryTab";
import FeaturesItems from "./FeaturesItems";
import Left from "./Left";

class Home extends Component {
  render() {
    return (
      <div>
        <section id="slider">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div
                  id="slider-carousel"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#slider-carousel"
                      data-slide-to="0"
                      className="active"
                    ></li>
                    <li data-target="#slider-carousel" data-slide-to="1"></li>
                    <li data-target="#slider-carousel" data-slide-to="2"></li>
                  </ol>

                  <div className="carousel-inner">
                    <div className="item active">
                      <div className="col-sm-6">
                        <h1>
                          <span>E</span>-SHOPPER
                        </h1>
                        <h2>Free E-Commerce Template</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.{" "}
                        </p>
                        <button type="button" className="btn btn-default get">
                          Get it now
                        </button>
                      </div>
                      <div className="col-sm-6">
                        <img
                          src="images/home/girl1.jpg"
                          className="girl img-responsive"
                          alt=""
                        />
                        <img
                          src="images/home/pricing.png"
                          className="pricing"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="col-sm-6">
                        <h1>
                          <span>E</span>-SHOPPER
                        </h1>
                        <h2>100% Responsive Design</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.{" "}
                        </p>
                        <button type="button" className="btn btn-default get">
                          Get it now
                        </button>
                      </div>
                      <div className="col-sm-6">
                        <img
                          src="images/home/girl2.jpg"
                          className="girl img-responsive"
                          alt=""
                        />
                        <img
                          src="images/home/pricing.png"
                          className="pricing"
                          alt=""
                        />
                      </div>
                    </div>

                    <div className="item">
                      <div className="col-sm-6">
                        <h1>
                          <span>E</span>-SHOPPER
                        </h1>
                        <h2>Free Ecommerce Template</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.{" "}
                        </p>
                        <button type="button" className="btn btn-default get">
                          Get it now
                        </button>
                      </div>
                      <div className="col-sm-6">
                        <img
                          src="images/home/girl3.jpg"
                          className="girl img-responsive"
                          alt=""
                        />
                        <img
                          src="images/home/pricing.png"
                          className="pricing"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>

                  <a
                    href="#slider-carousel"
                    className="left control-carousel hidden-xs"
                    data-slide="prev"
                  >
                    <i className="fa fa-angle-left"></i>
                  </a>
                  <a
                    href="#slider-carousel"
                    className="right control-carousel hidden-xs"
                    data-slide="next"
                  >
                    <i className="fa fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row">
              <Left />
              <div className="col-sm-9 padding-right">
                <FeaturesItems qty={6} />
                <CategoryTab />

                <div className="recommended_items">
                  <h2 className="title text-center">recommended items</h2>

                  <div
                    id="recommended-item-carousel"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="item active">
                        <div className="col-sm-4">
                          <div className="product-image-wrapper">
                            <div className="single-products">
                              <div className="productinfo text-center">
                                <img src="images/home/recommend1.jpg" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a
                                  href="#"
                                  className="btn btn-default add-to-cart"
                                >
                                  <i className="fa fa-shopping-cart"></i>Add to
                                  cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="product-image-wrapper">
                            <div className="single-products">
                              <div className="productinfo text-center">
                                <img src="images/home/recommend2.jpg" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a
                                  href="#"
                                  className="btn btn-default add-to-cart"
                                >
                                  <i className="fa fa-shopping-cart"></i>Add to
                                  cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="product-image-wrapper">
                            <div className="single-products">
                              <div className="productinfo text-center">
                                <img src="images/home/recommend3.jpg" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a
                                  href="#"
                                  className="btn btn-default add-to-cart"
                                >
                                  <i className="fa fa-shopping-cart"></i>Add to
                                  cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="col-sm-4">
                          <div className="product-image-wrapper">
                            <div className="single-products">
                              <div className="productinfo text-center">
                                <img src="images/home/recommend1.jpg" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a
                                  href="#"
                                  className="btn btn-default add-to-cart"
                                >
                                  <i className="fa fa-shopping-cart"></i>Add to
                                  cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="product-image-wrapper">
                            <div className="single-products">
                              <div className="productinfo text-center">
                                <img src="images/home/recommend2.jpg" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a
                                  href="#"
                                  className="btn btn-default add-to-cart"
                                >
                                  <i className="fa fa-shopping-cart"></i>Add to
                                  cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="product-image-wrapper">
                            <div className="single-products">
                              <div className="productinfo text-center">
                                <img src="images/home/recommend3.jpg" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a
                                  href="#"
                                  className="btn btn-default add-to-cart"
                                >
                                  <i className="fa fa-shopping-cart"></i>Add to
                                  cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a
                      className="left recommended-item-control"
                      href="#recommended-item-carousel"
                      data-slide="prev"
                    >
                      <i className="fa fa-angle-left"></i>
                    </a>
                    <a
                      className="right recommended-item-control"
                      href="#recommended-item-carousel"
                      data-slide="next"
                    >
                      <i className="fa fa-angle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer id="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-sm-2">
                  <div className="companyinfo">
                    <h2>
                      <span>e</span>-shopper
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit,sed do eiusmod tempor
                    </p>
                  </div>
                </div>
                <div className="col-sm-7">
                  <div className="col-sm-3">
                    <div className="video-gallery text-center">
                      <a href="#">
                        <div className="iframe-img">
                          <img src="images/home/iframe1.png" alt="" />
                        </div>
                        <div className="overlay-icon">
                          <i className="fa fa-play-circle-o"></i>
                        </div>
                      </a>
                      <p>Circle of Hands</p>
                      <h2>24 DEC 2014</h2>
                    </div>
                  </div>

                  <div className="col-sm-3">
                    <div className="video-gallery text-center">
                      <a href="#">
                        <div className="iframe-img">
                          <img src="images/home/iframe2.png" alt="" />
                        </div>
                        <div className="overlay-icon">
                          <i className="fa fa-play-circle-o"></i>
                        </div>
                      </a>
                      <p>Circle of Hands</p>
                      <h2>24 DEC 2014</h2>
                    </div>
                  </div>

                  <div className="col-sm-3">
                    <div className="video-gallery text-center">
                      <a href="#">
                        <div className="iframe-img">
                          <img src="images/home/iframe3.png" alt="" />
                        </div>
                        <div className="overlay-icon">
                          <i className="fa fa-play-circle-o"></i>
                        </div>
                      </a>
                      <p>Circle of Hands</p>
                      <h2>24 DEC 2014</h2>
                    </div>
                  </div>

                  <div className="col-sm-3">
                    <div className="video-gallery text-center">
                      <a href="#">
                        <div className="iframe-img">
                          <img src="images/home/iframe4.png" alt="" />
                        </div>
                        <div className="overlay-icon">
                          <i className="fa fa-play-circle-o"></i>
                        </div>
                      </a>
                      <p>Circle of Hands</p>
                      <h2>24 DEC 2014</h2>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="address">
                    <img src="images/home/map.png" alt="" />
                    <p>505 S Atlantic Ave Virginia Beach, VA(Virginia)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-widget">
            <div className="container">
              <div className="row">
                <div className="col-sm-2">
                  <div className="single-widget">
                    <h2>Service</h2>
                    <ul className="nav nav-pills nav-stacked">
                      <li>
                        <a href="#">Online Help</a>
                      </li>
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                      <li>
                        <a href="#">Order Status</a>
                      </li>
                      <li>
                        <a href="#">Change Location</a>
                      </li>
                      <li>
                        <a href="#">FAQ’s</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="single-widget">
                    <h2>Quock Shop</h2>
                    <ul className="nav nav-pills nav-stacked">
                      <li>
                        <a href="#">T-Shirt</a>
                      </li>
                      <li>
                        <a href="#">Mens</a>
                      </li>
                      <li>
                        <a href="#">Womens</a>
                      </li>
                      <li>
                        <a href="#">Gift Cards</a>
                      </li>
                      <li>
                        <a href="#">Shoes</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="single-widget">
                    <h2>Policies</h2>
                    <ul className="nav nav-pills nav-stacked">
                      <li>
                        <a href="#">Terms of Use</a>
                      </li>
                      <li>
                        <a href="#">Privecy Policy</a>
                      </li>
                      <li>
                        <a href="#">Refund Policy</a>
                      </li>
                      <li>
                        <a href="#">Billing System</a>
                      </li>
                      <li>
                        <a href="#">Ticket System</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="single-widget">
                    <h2>About Shopper</h2>
                    <ul className="nav nav-pills nav-stacked">
                      <li>
                        <a href="#">Company Information</a>
                      </li>
                      <li>
                        <a href="#">Careers</a>
                      </li>
                      <li>
                        <a href="#">Store Location</a>
                      </li>
                      <li>
                        <a href="#">Affillate Program</a>
                      </li>
                      <li>
                        <a href="#">Copyright</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-3 col-sm-offset-1">
                  <div className="single-widget">
                    <h2>About Shopper</h2>
                    <form action="#" className="searchform">
                      <input type="text" placeholder="Your email address" />
                      <button type="submit" className="btn btn-default">
                        <i className="fa fa-arrow-circle-o-right"></i>
                      </button>
                      <p>
                        Get the most recent updates from <br />
                        our site and be updated your self...
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="container">
              <div className="row">
                <p className="pull-left">
                  Copyright © 2013 E-SHOPPER Inc. All rights reserved.
                </p>
                <p className="pull-right">
                  Designed by{" "}
                  <span>
                    <a target="_blank" href="http://www.themeum.com">
                      Themeum
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Home;
