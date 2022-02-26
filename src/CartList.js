import React, { Component } from "react";
import { Table } from "reactstrap";

export default class CartList extends Component {
  renderCart() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Category Id</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Units in Stock</th>
          </tr>
        </thead>
        <tbody>{this.props.cart.map(cartItem => (
          <tr key={cartItem.product.id}>
            <td>{cartItem.product.id}</td>
            <td>{cartItem.product.categoryId}</td>
            <td>{cartItem.product.productName}</td>
            <td>{cartItem.product.unitPrice}</td>
            <td>{cartItem.product.unitsInStock}</td>
          </tr>
          ))}
          
        </tbody>
      </Table>
    );
  }

  render() {
    return <div>{this.renderCart()}</div>;
  }
}
