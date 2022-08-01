import React, { Component } from "react";
import RecommendedItem from "./RecommendedItem";

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productDetail: { rating: {} },
      products: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/products/16")
      .then((res) => res.json())
      .then((data) => this.setState({ productDetail: data }));
  }
  render() {
    let {
      id,
      title,
      price,
      rating: { rate },
      image,
      category,
      description,
    } = this.state.productDetail;
    return (
      <>
        <div className="product-details">
          <div className="col-sm-5">
            <div className="view-product">
              <img src={image} alt="" />
              <h3>ZOOM</h3>
            </div>
            <div
              id="similar-product"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="item active">
                  <a href="">
                    <img src={image} alt="" />
                  </a>
                  <a href="">
                    <img src={image} alt="" />
                  </a>
                  <a href="">
                    <img src={image} alt="" />
                  </a>
                </div>
              </div>

              <a
                className="left item-control"
                href="#similar-product"
                data-slide="prev"
              >
                <i className="fa fa-angle-left"></i>
              </a>
              <a
                className="right item-control"
                href="#similar-product"
                data-slide="next"
              >
                <i className="fa fa-angle-right"></i>
              </a>
            </div>
          </div>
          <div className="col-sm-7">
            <div className="product-information">
              <img
                src="images/product-details/new.jpg"
                className="newarrival"
                alt=""
              />
              <h2>{title}</h2>
              <p>Web ID: {id}</p>
              <img src="images/product-details/rating.png" alt="" />
              <span>{rate}</span>
              <span>
                <span>US ${price}</span>
                <label>Quantity:</label>
                <input type="text" value="3" />
                <button type="button" className="btn btn-fefault cart">
                  <i className="fa fa-shopping-cart"></i>
                  Add to cart
                </button>
              </span>
              <p>
                <b>Availability:</b> In Stock
              </p>
              <p>
                <b>Condition:</b> New
              </p>
              <p>
                <b>Brand:</b> E-SHOPPER
              </p>
              <a href="">
                <img
                  src="images/product-details/share.png"
                  className="share img-responsive"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>

        <div className="category-tab shop-details-tab">
          <div className="col-sm-12">
            <ul className="nav nav-tabs">
              <li className="active">
                <a href="#details" data-toggle="tab">
                  Details
                </a>
              </li>
              <li>
                <a href="#tag" data-toggle="tab">
                  Tag
                </a>
              </li>
              <li>
                <a href="#reviews" data-toggle="tab">
                  Reviews (5)
                </a>
              </li>
            </ul>
          </div>
          <div className="tab-content">
            <div className="tab-pane fade active in" id="details">
              <p>{description}</p>
            </div>

            <div className="tab-pane fade" id="tag">
              <span>{category}</span>
            </div>

            <div className="tab-pane fade" id="reviews">
              <div className="col-sm-12">
                <ul>
                  <li>
                    <a href="">
                      <i className="fa fa-user"></i>EUGEN
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa fa-clock-o"></i>12:41 PM
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa fa-calendar-o"></i>31 DEC 2014
                    </a>
                  </li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
                <p>
                  <b>Write Your Review</b>
                </p>

                <form action="#">
                  <span>
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Email Address" />
                  </span>
                  <textarea name=""></textarea>
                  <b>Rating: </b>{" "}
                  <img src="images/product-details/rating.png" alt="" />
                  <button type="button" className="btn btn-default pull-right">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {
          <RecommendedItem link={"category/" + category} id = { id } />
        }
      </>
    );
  }
}

export default ProductDetail;
