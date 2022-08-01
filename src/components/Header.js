import React from "react";
import { Link, NavLink } from "react-router-dom";
import AppContext from "../AppContext";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  static contextType = AppContext;

  render() {
    let email = localStorage.getItem("email");

    return (
      <header id="header">
        <div className="header_top">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="contactinfo">
                  <ul className="nav nav-pills">
                    <li>
                      <a href="#">
                        <i className="fa fa-phone"></i> +2 95 01 88 821
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-envelope"></i> info@domain.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="social-icons pull-right">
                  <ul className="nav navbar-nav">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-dribbble"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-middle">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="logo pull-left">
                  {/* <a href="">
                    <img src="images/home/logo.png" alt="" />
                  </a> */}
                  <Link to="/">
                    <img src="images/home/logo.png" alt="" />
                  </Link>
                </div>
                <div className="btn-group pull-right">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-default dropdown-toggle usa"
                      data-toggle="dropdown"
                    >
                      USA
                      <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="#">Canada</a>
                      </li>
                      <li>
                        <a href="#">UK</a>
                      </li>
                    </ul>
                  </div>

                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-default dropdown-toggle usa"
                      data-toggle="dropdown"
                    >
                      DOLLAR
                      <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="#">Canadian Dollar</a>
                      </li>
                      <li>
                        <a href="#">Pound</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-8">
                <div className="shop-menu pull-right">
                  <ul className="nav navbar-nav">
                    {this.context.isLogged && (
                      <li>
                        <a href="#">
                          <i className="fa fa-user"></i> {email}
                        </a>
                      </li>
                    )}
                    <li>
                      <a href="#">
                        <i className="fa fa-star"></i> Wishlist
                      </a>
                    </li>
                    <li>
                      <a href="checkout.html">
                        <i className="fa fa-crosshairs"></i> Checkout
                      </a>
                    </li>
                    <li>
                      <NavLink activeClassName="active" to="/cart">
                        <i className="fa fa-shopping-cart"></i> Cart (
                        <span id="total-cart">{this.context.totalCart}</span>)
                      </NavLink>
                    </li>
                    <li>
                      {this.context.isLogged && (
                        <NavLink activeClassName="active" to="/logout">
                          <i className="fa fa-lock"></i> Logout
                        </NavLink>
                      )}
                      {this.context.isLogged || (
                        <NavLink activeClassName="active" to="/login">
                          <i className="fa fa-lock"></i> Login
                        </NavLink>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-bottom">
          <div className="container">
            <div className="row">
              <div className="col-sm-9">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div className="mainmenu pull-left">
                  <ul className="nav navbar-nav collapse navbar-collapse">
                    <li>
                      <NavLink to="/" activeClassName="active">
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/listing" activeClassName="active">
                        Listing
                      </NavLink>
                    </li>
                    <li className="dropdown">
                      <a href="#">
                        Blog<i className="fa fa-angle-down"></i>
                      </a>
                      <ul role="menu" className="sub-menu">
                        <li>
                          <a href="blog.html">Blog List</a>
                        </li>
                        <li>
                          <a href="blog-single.html">Blog Single</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="404.html">404</a>
                    </li>
                    <li>
                      <a href="contact-us.html">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="search_box pull-right">
                  <input
                    onChange={(e) => {
                      this.props.onHandleSearchChange(e.target.value);
                    }}
                    type="text"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
