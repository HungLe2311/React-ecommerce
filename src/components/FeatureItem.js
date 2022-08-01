import React from "react";
import ProductItem from "./ProductItem";
import ProductItemHook from "./ProductItemHook";
import PriceContext from "../PriceContext";

class FeatureItem extends React.Component {
  constructor(props) {
    super(props);
    this.itemPerPage = 6;
    this.totalPage = 1;
    this.state = {
      products: [],
      isLoaded: false,
      currentPage: 1,
    };
  }

  // static contextType = PriceContext;

  componentDidMount() {
    fetch(`https://fakestoreapi.com/products?limit=${this.props.qty}`)
      .then((res) => res.json())
      .then((data) => {
        this.totalPage = Math.ceil(data.length / this.itemPerPage);
        this.setState({ products: data, isLoaded: true });
      });
  }

  createSearchList = () => {
    let productName = this.props.productName.toLowerCase();
    let searchList = this.state.products.filter((item) =>
      item.title.toLowerCase().includes(productName) &&
      item.price >= this.context.priceFrom &&
      item.price <= this.context.priceTo
    );
    this.totalPage = Math.ceil(searchList.length / this.itemPerPage);
    let startIndex = (this.state.currentPage - 1) * this.itemPerPage,
      endIndex = startIndex + this.itemPerPage;
    searchList = searchList.slice(startIndex, endIndex);
    
    return searchList;
  };

  getCurrentPage = () => {
    let result = [],
      startIndex = (this.state.currentPage - 1) * this.itemPerPage,
      endIndex = startIndex + this.itemPerPage;
    result = this.state.products.slice(startIndex, endIndex);
    return result;
  };

  renderPagination = () => {
    let result = [];
    if (this.state.currentPage > this.totalPage && this.totalPage > 0) {
       this.setState({currentPage: this.totalPage}) 
    }
    for (let i = 1; i <= this.totalPage; i++) {
        let pagiItem = (
        <li
          onClick={() => {
            this.setState({ currentPage: i });
          }}
          className={this.state.currentPage === i  ? "active" : ""}
        >
          <a href="#">{i}</a>
        </li>
      );
      result.push(pagiItem);
    }

    return result;
  };

  movePage = (step, event) => {
    let page = this.state.currentPage + step;
    if (page >= 1 && page <= this.totalPage) {
      this.setState({ currentPage: page });
    }
  };

  renderProductsList = () => {
    let result = [];
    if (!this.props.isSearch) {
      this.getCurrentPage().map((product) =>
        result.push(
          <ProductItemHook
            data={product}
            option={{ overlay: true, choose: true, cols: 3 }}
            key={product.id}
          />
        )
      );
    } else {
      this.createSearchList().map((product) =>
        result.push(
          <ProductItemHook
            data={product}
            option={{ overlay: true, choose: true, cols: 3 }}
            key={product.id}
            
          />
        )
      );
    }
    return result;
  };

  render() {

    return (
      <div className="features_items">
        <h2 className="title text-center">Features Items</h2>
        {this.state.isLoaded ? (
          this.renderProductsList()
        ) : (
          <div className="loanding-img">
            <img
              src="./images/Loading_icon.gif"
              alt="loading"
              style={{ width: "auto", height: "200px" }}
            />
          </div>
        )}
        <div className="col-sm-12" style={{ textAlign: "center" }}>
          <ul class="pagination">
            <li onClick={(e) => this.movePage(-1, e)}>
              <a href="#">&laquo;</a>
            </li>
            {this.renderPagination().map((li) => li)}
            <li onClick={(e) => this.movePage(1, e)}>
              <a href="#">&raquo;</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

FeatureItem.contextType = PriceContext;
export default FeatureItem;
