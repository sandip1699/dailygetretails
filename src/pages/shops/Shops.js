import React from "react";
import styled from "styled-components";
import Breadcumbs from "../../components/Breadcumbs";
import { Container, Row, Col, Button, FormControl } from "react-bootstrap";
function shops(props) {
  const ShopLayout = styled.div`
    width: 100%;
  `;

  return (
    <div>
      <Breadcumbs page="Shop" />
      <ShopLayout>
        <Container>
          <Row>
            <Col md={3}>
                Filter
            </Col>
            <Col md={9}>
                    Products
            </Col>
          </Row>
        </Container>
      </ShopLayout>
    </div>
  );
}

export default shops;
