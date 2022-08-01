import React, { Component } from "react";
import FeaturesItems from "./FeaturesItems";
import Left from "./Left";

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { product: { rating: {} }, categoryProduct: [] };
  }
  componentDidMount() {
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ product: data });
        fetch(`https://fakestoreapi.com/products/category/${data.category}`)
          .then((res) => res.json())
          .then((json) => this.setState({ categoryProduct: json }));
      });
  }
  recommendItems() {
    let lengthCategory = this.state.categoryProduct.length,
      tempArray = [],
      temp = [];
    for (let i = 0; i < lengthCategory; i + 3) {
      temp = this.state.categoryProduct.slice(i, i + 3);
      tempArray.push(temp);
    }
    console.log(tempArray);
    // return tempArray.map((e) => (
    //   <div className={e == 0 ? "item active" : "item"}>
    //     {temArray[e].map((product) => (
    //       <div className="col-sm-4">
    //         <div className="product-image-wrapper">
    //           <div className="single-products">
    //             <div className="productinfo text-center">
    //               <img src={product.image} alt="" />
    //               <h2>${product.price}</h2>
    //               <p>{product.title}</p>
    //               <button type="button" className="btn btn-default add-to-cart">
    //                 <i className="fa fa-shopping-cart"></i>Add to cart
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // ));
  }
  render() {
    let {
      id,
      title,
      price,
      description,
      category,
      image,
      rating: { rate },
    } = this.state.product;
    return (
      <section>
        <div className="container">
          <div className="row">
            <Left />
            <div className="col-sm-9 padding-right">
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
                    <img src="images/product-details/rating.png" alt="" />{" "}
                    <span>Rating: {rate}</span>
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
                    <li>
                      <a href="#details" data-toggle="tab">
                        Details
                      </a>
                    </li>
                    <li>
                      <a href="#companyprofile" data-toggle="tab">
                        Company Profile
                      </a>
                    </li>
                    <li>
                      <a href="#tag" data-toggle="tab">
                        Tag
                      </a>
                    </li>
                    <li className="active">
                      <a href="#reviews" data-toggle="tab">
                        Reviews (5)
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="tab-content">
                  <div className="tab-pane fade" id="details">
                    {description}
                  </div>

                  <div className="tab-pane fade" id="companyprofile">
                    <div className="col-sm-3">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src="images/home/gallery1.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <button
                              type="button"
                              className="btn btn-default add-to-cart"
                            >
                              <i className="fa fa-shopping-cart"></i>Add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src="images/home/gallery3.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <button
                              type="button"
                              className="btn btn-default add-to-cart"
                            >
                              <i className="fa fa-shopping-cart"></i>Add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src="images/home/gallery2.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <button
                              type="button"
                              className="btn btn-default add-to-cart"
                            >
                              <i className="fa fa-shopping-cart"></i>Add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src="images/home/gallery4.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <button
                              type="button"
                              className="btn btn-default add-to-cart"
                            >
                              <i className="fa fa-shopping-cart"></i>Add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="tag">
                    {category}
                  </div>

                  <div className="tab-pane fade active in" id="reviews">
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
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
                        <button
                          type="button"
                          className="btn btn-default pull-right"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <div className="recommended_items">
                <h2 className="title text-center">recommended items</h2>

                <div
                  id="recommended-item-carousel"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    {this.recommendItems()}
                    {/* <div className="item active">
                      <div className="col-sm-4">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src="images/home/recommend1.jpg" alt="" />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <button
                                type="button"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart"></i>Add to
                                cart
                              </button>
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
                              <button
                                type="button"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart"></i>Add to
                                cart
                              </button>
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
                              <button
                                type="button"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart"></i>Add to
                                cart
                              </button>
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
                              <button
                                type="button"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart"></i>Add to
                                cart
                              </button>
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
                              <button
                                type="button"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart"></i>Add to
                                cart
                              </button>
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
                              <button
                                type="button"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart"></i>Add to
                                cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
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
    );
  }
}

export default ProductDetail;
