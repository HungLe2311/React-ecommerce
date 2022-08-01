import React from "react";
import PriceContext from "../PriceContext";

class LeftSideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: ['...'],
    };
  }

  static contextType = PriceContext;
  componentDidMount() {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          categories: data,
        })
      );
  }

  render() {
    return (
      <div className="left-sidebar">
        <h2>Category</h2>
        <div className="panel-group category-products" id="accordian">
          {this.state.categories.map((item, index) => (
            <div className="panel panel-default" key={index}>
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a href="#sportswear">{item}</a>
                </h4>
              </div>
            </div>
          ))}
        </div>

        <div className="brands_products">
          <h2>Brands</h2>
          <div className="brands-name">
            <ul className="nav nav-pills nav-stacked">
              <li>
                <a href="#">
                  {" "}
                  <span className="pull-right">(50)</span>Acne
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <span className="pull-right">(56)</span>Grüne Erde
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <span className="pull-right">(27)</span>Albiro
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <span className="pull-right">(32)</span>Ronhill
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <span className="pull-right">(5)</span>Oddmolly
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <span className="pull-right">(9)</span>Boudestijn
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <span className="pull-right">(4)</span>Rösch creative culture
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="price-range">
          <h2>Price Range</h2>
          <div className="well text-center">
            <label htmlFor="price-from"> 
              From</label>
            <input
              type="number"
              className="span2"
              value={this.context.priceFrom}
              onChange={(e) => this.props.setPriceFrom(e.target.value)}
              id="price-from"
            />
            <br/>
            <label htmlFor="price-to">To</label> <br/>
            <input
              type="number"
              className="span2"
              value={this.context.priceTo}
              onChange={(e) => this.props.setPriceTo(e.target.value)}
              id="price-to"
            />
            <br /></div>
        </div>

        <div className="shipping text-center">
          <img src="images/home/shipping.jpg" alt="" />
        </div>
      </div>
    );
  }
}

export default LeftSideBar;
