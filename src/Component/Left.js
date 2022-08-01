import React, { Component } from "react";

class Left extends Component {
  constructor(props) {
    super(props);
    this.state = { categories: ["..."] };
  }
  componentDidMount() {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => this.setState({ categories: json }));
  }
  render() {
    return (
      <div className="col-sm-3">
        <div className="left-sidebar">
          <h2>Category</h2>
          <div className="panel-group category-products" id="accordian">
            {/* <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordian"
                    href="#sportswear"
                  >
                    <span className="badge pull-right">
                      <i className="fa fa-plus"></i>
                    </span>
                    Sportswear
                  </a>
                </h4>
              </div>
              <div id="sportswear" className="panel-collapse collapse">
                <div className="panel-body">
                  <ul>
                    <li>
                      <a href="#">Nike </a>
                    </li>
                    <li>
                      <a href="#">Under Armour </a>
                    </li>
                    <li>
                      <a href="#">Adidas </a>
                    </li>
                    <li>
                      <a href="#">Puma</a>
                    </li>
                    <li>
                      <a href="#">ASICS </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordian"
                    href="#mens"
                  >
                    <span className="badge pull-right">
                      <i className="fa fa-plus"></i>
                    </span>
                    Mens
                  </a>
                </h4>
              </div> */}
            {this.state.categories.map((e) => (
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a href="#">{e}</a>
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
                    <span className="pull-right">(4)</span>Rösch creative
                    culture
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="price-range">
            <h2>Price Range</h2>
            <div className="well text-center">
              <input
                type="text"
                className="span2"
                value=""
                data-slider-min="0"
                data-slider-max="600"
                data-slider-step="5"
                data-slider-value="[250,450]"
                id="sl2"
              />
              <br />
              <b className="pull-left">$ 0</b>{" "}
              <b className="pull-right">$ 600</b>
            </div>
          </div>

          <div className="shipping text-center">
            <img src="images/home/shipping.jpg" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Left;
