import React from "react";
import LeftSideBar from "./LeftSideBar";
import FeatureItem from "./FeatureItem";
import Main from "./Main";

class Listing extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    
    return (
      <Main>
        <FeatureItem qty={0} productName={this.props.productName} isSearch={this.props.isSearch}/>
      </Main>
    );
  }
}

export default Listing;
