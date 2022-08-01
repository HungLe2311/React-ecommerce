import React, { Component } from "react";
import Product from "./Product";

class CategoryTab extends Component {
  constructor(props) {
    super(props);
    this.state = { categories: ["..."], products: [] };
  }
  componentDidMount() {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => this.setState({ categories: json }));
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => this.setState({ products: json }));
  }
  render() {
    return (
      <div className="category-tab">
        <div className="col-sm-12">
          <ul className="nav nav-tabs">
            {this.state.categories.map((cate, index) => (
              <li className={index == 0 ? "active" : ""}>
                <a href={"#" + index} data-toggle="tab">
                  {cate}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="tab-content">
          {this.state.categories.map((cate, index) => {
            return (
              <>
                <div
                  className={`tab-pane fade ${index == 0 ? "active in" : ""}`}
                  id={index}
                >
                  {this.state.products
                    .filter((product) => product.category == cate)
                    .map((product) => {
                      return (
                        <Product
                          product={product}
                          overlay={false}
                          choose={false}
                          cols={4}
                          key={product.id}
                        />
                        // <div className="col-sm-3">
                        //   <div className="product-image-wrapper">
                        //     <div className="single-products">
                        //       <div className="productinfo text-center">
                        //         <img src={product.image} alt="" />
                        //         <h2>${product.price}</h2>
                        //         <p>{product.title}</p>
                        //         <a
                        //           href="#"
                        //           className="btn btn-default add-to-cart"
                        //         >
                        //           <i className="fa fa-shopping-cart"></i>Add to
                        //           cart
                        //         </a>
                        //       </div>
                        //     </div>
                        //   </div>
                        // </div>
                      );
                    })}
                  ;
                </div>
              </>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CategoryTab;
