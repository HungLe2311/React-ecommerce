import React, { Component } from "react";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { isWhishList: false };
  }
  addWishList = () => {
    this.setState({ isWhishList: !this.state.isWhishList });
  };
  render() {
    return (
      <div className={`col-sm-${12 / this.props.cols}`}>
        <div className="product-image-wrapper">
          <div className="single-products">
            <div className="productinfo text-center">
              <img src={this.props.product.image} alt="" />
              <h2>${this.props.product.price}</h2>
              <p>{this.props.product.title}</p>
              <a href="#" className="btn btn-default add-to-cart">
                <i className="fa fa-shopping-cart"></i>Add to cart
              </a>
            </div>
            {this.props.overlay && (
              <div className="product-overlay">
                <div className="overlay-content">
                  <h2>${this.props.product.price}</h2>
                  <p>{this.props.product.title}</p>
                  <a href="#" className="btn btn-default add-to-cart">
                    <i className="fa fa-shopping-cart"></i>Add to cart
                  </a>
                </div>
              </div>
            )}
          </div>
          {this.props.choose && (
            <div className="choose">
              <ul className="nav nav-pills nav-justified">
                <li onClick={this.addWishList}>
                  <a href="javascript:void(0)">
                    <i
                      className={
                        this.state.isWhishList
                          ? "fa fa-check"
                          : "fa fa-plus-square"
                      }
                    ></i>
                    Add to wishlist
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-plus-square"></i>Add to compare
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Product;
