import React from "react";
import CategoryItem from "./CategoryItem";

class CategoryTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categories: [] };
  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => this.setState({ categories: data }));
  }
  render() {
    return (
      <div className="category-tab">
        <div className="col-sm-12">
          <ul className="nav nav-tabs">
            {this.state.categories.map((type, index) => {
              return (
                <li className={index === 0 ? "active" : ""}>
                  <a href={"#" + index} data-toggle="tab">
                    {type}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="tab-content">
          {this.state.categories.map((type, index) => (
            <div
              className={
                index === 0 ? "tab-pane fade active in" : "tab-pane fade in"
              }
              id={index}
            >
              <CategoryItem type={type} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CategoryTab;
