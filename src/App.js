import Layout from "./components/Layout";
import Home from "./components/Home";
import Listing from "./components/Listing";
import Detail from "./components/Detail";
import Cart from "./components/Cart";
import React, { Component, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Error404 from "./components/404";
import AppContext from "./AppContext";
import Login from "./components/Login";
import Logout from "./components/Logout";

function App(props) {
  let [state, setState] = useState({
    productsList: [],
    searchValue: "",
    isSearch: false,
  });
  let [totalCart, setTotalCart] = useState(0);
  let [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setState(
        { 
          ...state, 
          productsList: data 
        }
        ));

        //render lan dau
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        setTotalCart(cart.reduce((total, item) => (total + item.qty), 0))
  }, []);

  let handleSearchChange = (data) => {
    setState({
      ...state,
      searchValue: data,
      isSearch: true,
    });
  };

  return (
    <AppContext.Provider value={{ totalCart, setTotalCart, isLogged, setIsLogged}}>
      <div>
        <Routes>
          <Route
            path="/"
            element={<Layout onHandleSearchChange={handleSearchChange} />}
          >
            <Route path="/" element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="login" element={<Login />} />
            <Route path="logout" element={<Logout />} />
            <Route
              path="listing"
              element={
                <Listing
                  productName={state.searchValue}
                  isSearch={state.isSearch}
                />
              }
            />
            <Route path="detail/:id" element={<Detail />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
