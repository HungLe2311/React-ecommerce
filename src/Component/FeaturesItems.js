import React, { Component } from "react";
import Product from "./Product";

class FeaturesItems extends Component {
  constructor(props) {
    super(props);
    this.itemPerPage = 6;
    this.numberOfPage = 0;
    this.state = { products: [], currentPage: 3 };
  }
  componentDidMount() {
    fetch(`https://fakestoreapi.com/products?limit=${this.props.qty}`)
      .then((res) => res.json())
      .then((data) => {
        this.numberOfPage = Math.ceil(data.length / this.itemPerPage);
        this.setState({ products: data });
        document
          .querySelector(`#page${this.state.currentPage}`)
          .classList.add("active");
      });
  }
  // Lấy các sản phẩm trong currentPage
  getCurrentPage = () => {
    let result = [],
      startIndex = (this.state.currentPage - 1) * this.itemPerPage,
      endIndex = startIndex + this.itemPerPage;
    result = this.state.products.slice(startIndex, endIndex);
    return result;
  };
  setPage = (page) => {
    this.setState({ currentPage: page });
  };
  renderPage = () => {
    let result = [];
    for (let i = 1; i <= this.numberOfPage; i++) {
      let page = (
        <li
          id={`page${i}`}
          className={this.state.currentPage == i ? "active" : ""}
        >
          <a onClick={() => this.setPage(i)} href="javascript:void(0)">
            {i}
          </a>
        </li>
      );
      result.push(page);
    }
    return result;
  };
  movePage = (step) => {
    let page = this.state.currentPage + step;
    if (page >= 1 && page <= this.numberOfPage) {
      this.setState({ currentPage: page });
    }
  };
  render() {
    return (
      <>
        <div className="features_items">
          <h2 className="title text-center">Features Items</h2>
          {this.getCurrentPage().map((product) => (
            <Product
              product={product}
              overlay={true}
              choose={true}
              cols={3}
              key={product.id}
            />
          ))}
        </div>
        <ul className="pagination">
          <li onClick={() => this.movePage(-1)}>
            <a href="javascrip:void(0)">&laquo;</a>
          </li>
          {this.renderPage()}
          <li onClick={() => this.movePage(1)}>
            <a href="javascrip:void(0)">&raquo;</a>
          </li>
        </ul>
      </>
    );
  }
}

export default FeaturesItems;
