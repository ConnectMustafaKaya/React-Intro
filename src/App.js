import React, { Component } from "react";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {
  state = { currentCategory: "", products: [] };

  componentDidMount() {
    this.getProducts();
  }
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
  };

  getProducts = () => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  render() {
    let productInfo = { title: "Product List", smth: "Something" };
    let categoryInfo = { title: "Category List" };
    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col>
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col>
              <ProductList
                products={this.state.products}
                currentCategory={this.state.currentCategory}
                info={productInfo}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
