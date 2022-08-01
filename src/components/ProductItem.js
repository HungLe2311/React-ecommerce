import React from "react";

class ProductItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isChecked: false}
  }

  addToWishList = (e) => {
      e.preventDefault();
      this.setState({isChecked : !this.state.isChecked});
  }

  render() {
    let product = this.props.data;
    let { overlay, choose, cols } = this.props.option;
    return (
      <div className={`col-sm-${12 / cols}`}>
        <div className="product-image-wrapper">
          <div className="single-products">
            <div className="productinfo text-center">
              <img src={product.image} alt="" />
              <h2>${product.price}</h2>
              <p>{product.title}</p>
              <a href="#" className="btn btn-default add-to-cart">
                <i className="fa fa-shopping-cart"></i>Add to cart
              </a>
            </div>
            {overlay && (
              <div className="product-overlay">
                <div className="overlay-content">
                  <h2>${product.price}</h2>
                  <p>{product.title}</p>
                  <a href="#" className="btn btn-default add-to-cart">
                    <i className="fa fa-shopping-cart"></i>Add to cart
                  </a>
                </div>
              </div>
            )}
          </div>
          {choose && (
            <div className="choose">
              <ul className="nav nav-pills nav-justified">
                <li>
                  <a href="#" onClick={(e) => this.addToWishList(e)}>
                    
                    <i className={(this.state.isChecked) ? "fa fa-check" : "fa fa-plus-square"}></i>Add to wishlist
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

export default ProductItem;
