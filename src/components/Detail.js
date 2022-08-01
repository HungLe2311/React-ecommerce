import React from "react";
import LeftSideBar from "./LeftSideBar";
import Main from "./Main";
import ProductDetail from "./ProductDetail";
import ProductDetailHook from "./ProductDetailHook";

class Detail extends React.Component {
  render() {
    return (
      <Main>
        <ProductDetailHook />
      </Main>
    );
  }
}

export default Detail;
