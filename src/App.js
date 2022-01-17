import React from "react";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row,Col } from "reactstrap";

function App() {

  let productInfo={title:"Product List",smth:"Something"}
  let categoryInfo={title:"Category List"}

  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
        <Col>
        <CategoryList info={categoryInfo} />
        </Col>
         <Col>
         <ProductList info={productInfo} />
         </Col>        
        </Row>
      </Container>
    </div>
  );
}

export default App;
