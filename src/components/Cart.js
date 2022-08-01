import { useContext, useState } from "react";
import AppContext from "../AppContext";

function Cart() {
  let cart = JSON.parse(localStorage.getItem("cart"));
  let [rerender, setRerender] = useState(false);
  let total = useContext(AppContext);

  let deleteFromCart = (index) => {
    if (window.confirm("Are you sure?")) {
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      total.setTotalCart(cart.reduce((total, item) => total + item.qty, 0));
      setRerender(!rerender);
    }
  };

  let changeQty = (index, num) => {
    if (cart[index].qty + num > 0) cart[index].qty += num;
    localStorage.setItem("cart", JSON.stringify(cart));
    total.setTotalCart(cart.reduce((total, item) => total + item.qty, 0));
    setRerender(!rerender);
  };

  return (
    <>
      <section id="cart_items">
        <div className="container">
          <div className="breadcrumbs">
            <ol className="breadcrumb">
              <li>
                <a href="#">Home</a>
              </li>
              <li className="active">Shopping Cart</li>
            </ol>
          </div>
          <div className="table-responsive cart_info">
            <table className="table table-condensed">
              <thead>
                <tr className="cart_menu">
                  <td className="image">Item</td>
                  <td className="description"></td>
                  <td className="price">Price</td>
                  <td className="quantity">Quantity</td>
                  <td className="total">Total</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr>
                    <td className="cart_product">
                      <a href="">
                        <img src={item.img} alt="" />
                      </a>
                    </td>
                    <td className="cart_description">
                      <h4>
                        <a href="">{item.name}</a>
                      </h4>
                      <p>Web ID: {item.id}</p>
                    </td>
                    <td className="cart_price">
                      <p>${item.price}</p>
                    </td>
                    <td className="cart_quantity">
                      <div className="cart_quantity_button">
                        <a
                          className="cart_quantity_up"
                          href="javascript:void()"
                          onClick={() => changeQty(index, 1)}
                        >
                          {" "}
                          +{" "}
                        </a>
                        <input
                          className="cart_quantity_input"
                          type="text"
                          name="quantity"
                          value={item.qty}
                          autocomplete="off"
                          size="2"
                        />
                        <a
                          className="cart_quantity_down"
                          href="javascript:void()"
                          onClick={() => changeQty(index, -1)}
                        >
                          {" "}
                          -{" "}
                        </a>
                      </div>
                    </td>
                    <td className="cart_total">
                      <p className="cart_total_price">
                        ${(item.qty * item.price).toLocaleString()}
                      </p>
                    </td>
                    <td className="cart_delete">
                      <a
                        className="cart_quantity_delete"
                        href="javascript:void()"
                        onClick={() => deleteFromCart(index)}
                      >
                        <i className="fa fa-times"></i>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="do_action">
        <div className="container">
          <div className="heading">
            <h3>What would you like to do next?</h3>
            <p>
              Choose if you have a discount code or reward points you want to
              use or would like to estimate your delivery cost.
            </p>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="chose_area">
                <ul className="user_option">
                  <li>
                    <input type="checkbox" />
                    <label>Use Coupon Code</label>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <label>Use Gift Voucher</label>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <label>Estimate Shipping & Taxes</label>
                  </li>
                </ul>
                <ul className="user_info">
                  <li className="single_field">
                    <label>Country:</label>
                    <select>
                      <option>United States</option>
                      <option>Bangladesh</option>
                      <option>UK</option>
                      <option>India</option>
                      <option>Pakistan</option>
                      <option>Ucrane</option>
                      <option>Canada</option>
                      <option>Dubai</option>
                    </select>
                  </li>
                  <li className="single_field">
                    <label>Region / State:</label>
                    <select>
                      <option>Select</option>
                      <option>Dhaka</option>
                      <option>London</option>
                      <option>Dillih</option>
                      <option>Lahore</option>
                      <option>Alaska</option>
                      <option>Canada</option>
                      <option>Dubai</option>
                    </select>
                  </li>
                  <li className="single_field zip-field">
                    <label>Zip Code:</label>
                    <input type="text" />
                  </li>
                </ul>
                <a className="btn btn-default update" href="">
                  Get Quotes
                </a>
                <a className="btn btn-default check_out" href="">
                  Continue
                </a>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="total_area">
                <ul>
                  <li>
                    Cart Sub Total{" "}
                    <span>
                      $
                      {cart
                        .reduce(
                          (total, item) => total + item.qty * item.price,
                          0
                        )
                        .toLocaleString()}
                    </span>
                  </li>
                  <li>
                    Eco Tax <span>$2</span>
                  </li>
                  <li>
                    Shipping Cost <span>Free</span>
                  </li>
                  <li>
                    Total <span>$61</span>
                  </li>
                </ul>
                <a className="btn btn-default update" href="">
                  Update
                </a>
                <a className="btn btn-default check_out" href="">
                  Check Out
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
