import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
export default class ProductList extends Component {
  state = {
    products: [
      { productId: 1, productName: "Beverages" },
      { productId: 2, productName: "Condiments" },
    ],
  };

  render() {
    return (
      <div>
        <h3>
          {this.props.info.title} - {this.props.currentCategory}
        </h3>
        <ListGroup>
          {this.state.products.map((product) => (
            <ListGroupItem key={product.productId}>
              {product.productName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
