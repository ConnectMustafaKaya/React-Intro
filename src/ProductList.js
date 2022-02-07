import React, { Component } from "react";
import { ListGroup, ListGroupItem, Table } from "reactstrap";
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
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity Per Unit</th>
              <th>Units In Stock</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
              <th scope="row">{product.id}</th>
              <td>{product.productName}</td>
              <td>{product.unitPrice}</td>
              <td>{product.quantityPerUnit}</td>
              <td>{product.unitsInStock}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
