import React from "react";
import ProductItem from "./ProductItem";
import ProductItemHook from "./ProductItemHook";

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [], isLoaded: false };
  }
  componentDidMount() {
    fetch(`https://fakestoreapi.com/products/category/${this.props.type}`)
      .then((res) => res.json())
      .then((data) => this.setState({ products: data, isLoaded: true }));
  }

  render() {
    let products = this.state.products;
    return (
      <>
        {this.state.isLoaded ? (
          products.map((product) => (
            <ProductItemHook
              data={product}
              option={{ overlay: false, choose: false, cols: 4 }}
              key={product.id}
            />
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
      </>
    );
  }
}

export default CategoryItem;
