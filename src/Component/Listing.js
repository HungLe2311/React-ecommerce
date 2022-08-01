import React, { Component } from "react";
import CategoryTab from "./CategoryTab";
import FeaturesItems from "./FeaturesItems";
import Left from "./Left";

class Listing extends Component {
  render() {
    return (
      <div>
        <section>
          <div className="container">
            <div className="row">
              <Left />
              <div className="col-sm-9 padding-right">
                <FeaturesItems qty={0} />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Listing;
