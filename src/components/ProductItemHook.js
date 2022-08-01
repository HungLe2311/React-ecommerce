import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../AppContext";

function ProductItemHook(props) {
  let [checked, setChecked] = useState(false);
  let total = useContext(AppContext);

  let addToWishList = (e) => {
    e.preventDefault();
    // this.setState({isChecked : !this.state.isChecked});
    setChecked(!checked);
  };
  let addToCart = () => {
    // 1. Lay gio hang tu localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    // 2. Xu ly gio hang

    let product = props.data;

    let cartItem = {
      id: product.id,
      name: product.title,
      img: product.image,
      price: product.price,
      qty: 1,
    };

    let cartItemFound = cart.find((item) => item.id == cartItem.id);

    if (cartItemFound) {
      cartItemFound.qty++;
    } else cart.push(cartItem);

    // 3. Cat gio hang vao localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    total.setTotalCart(cart.reduce((total, item) => total + item.qty, 0));
    // document.querySelector("#total-cart").innerHTML = cart.reduce((total, item) => (total + item.qty), 0)
  };

  let product = props.data;
  let { overlay, choose, cols } = props.option;

  return (
    <div className={`col-sm-${12 / cols}`}>
      <div className="product-image-wrapper">
        <div className="single-products">
          <div className="productinfo text-center">
            <img src={product.image} alt="" />
            <h2>${product.price}</h2>
            <p>{product.title}</p>
            <a
              href="#"
              className="btn btn-default add-to-cart"
              onClick={() => addToCart(product.id)}
            >
              <i className="fa fa-shopping-cart"></i>Add to cart
            </a>
          </div>
          {overlay && (
            <div className="product-overlay">
              <div className="overlay-content">
                <h2>${product.price}</h2>
                <p>{product.title}</p>
                <a
                  href="#"
                  className="btn btn-default add-to-cart"
                  onClick={() => addToCart(product.id)}
                >
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
                <a href="#" onClick={(e) => addToWishList(e)}>
                  <i
                    className={checked ? "fa fa-check" : "fa fa-plus-square"}
                  ></i>
                  Add to wishlist
                </a>
              </li>
              <li>
                <Link to={`/detail/${product.id}`}>
                  <i className="fa fa-plus-square"></i>View detail
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductItemHook;
