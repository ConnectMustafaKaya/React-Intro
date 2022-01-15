import React from "react";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row,Col } from "reactstrap";

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
        <Col>
        <CategoryList />
        </Col>
         <Col>
         <ProductList />
         </Col>        
        </Row>
      </Container>
    </div>
  );
}

export default App;
