import React, { Component } from "react";
import ProductItem from "./ProductItem";
import ProductItemHook from "./ProductItemHook";

class RecommendedItem extends Component {
  constructor(props) {
    super(props);
    this.itemPerSlide = 3;
    this.totalSlide = 0;
    this.firstLoaded = false;
    this.state = { products: [], isLoaded: false};
  }

  componentDidUpdate () {
    if (!this.firstLoaded) {
      fetch(`https://fakestoreapi.com/products/${this.props.link}`)
      .then((res) => res.json())
      .then((data) => {
        data = data.filter((prod) => prod.id != this.props.id);
        this.totalSlide = Math.ceil(data.length / this.itemPerSlide);

        data = this.createProductsList(data);

        this.setState({ products: data, isLoaded: true });
      })
      this.firstLoaded = true;

    }
  }

  createProductsList = (products) => {
    let productsGroup = [],
      productsArr = [],
      startIndex,
      endIndex;

    for (let i = 1; i <= this.totalSlide; i++) {
      startIndex = (i - 1) * this.itemPerSlide;
      endIndex = startIndex + this.itemPerSlide;
      productsArr = products.slice(startIndex, endIndex);
      productsGroup.push(productsArr);
    }
    return productsGroup;
  };

  render() {
    return (
      <div className="recommended_items">
        <h2 className="title text-center">recommended items</h2>

        <div
          id="recommended-item-carousel"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            {this.state.isLoaded ? (
              this.state.products.map((item, index) => (
                <div className={index === 0 ? "item active" : "item"}>
                  {item.map((product) => (
                    <ProductItemHook
                      data={product}
                      option={{ overlay: false, choose: false, cols: 3 }}
                      key={product.id}
                    />
                  ))}
                </div>
              ))
            ) : (
              <div className="loanding-img">
                <img
                  src="./images/Loading_icon.gif"
                  alt="loading"
                  style={{ width: "auto", height: "200px" }}
                />
              </div>
            )}
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
    );
  }
}

export default RecommendedItem;
