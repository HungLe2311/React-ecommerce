import React from "react";
import { useState } from "react";
import LeftSideBar from "./LeftSideBar";
import PriceContext from "../PriceContext";

function Main(props) {
  let [priceFrom, setPriceFrom] = useState(0);
  let [priceTo, setPriceTo] = useState(10000);
  

  return (
    <PriceContext.Provider value={{ priceFrom: priceFrom, priceTo: priceTo }}>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <LeftSideBar
                // priceFrom={priceFrom}
                // priceTo={priceTo}
                setPriceFrom={setPriceFrom}
                setPriceTo={setPriceTo}
              />
            </div>

            <div className="col-sm-9 padding-right">{props.children}</div>
          </div>
        </div>
      </section>
    </PriceContext.Provider>
  );
}

export default Main;
