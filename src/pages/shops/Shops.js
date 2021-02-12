import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Breadcumbs from "../../components/Breadcumbs";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FiShoppingBag, FiEye, FiHeart } from "react-icons/fi";
import Products from "../../data/Products.json";
function Shops(props) {
  return (
    <div>
      <Breadcumbs page="Shop" />

      <Container>
        <Row className="mt-4">
          <Col md={3}>Filter</Col>
          <Col md={9}>
            <Row>
              {Products.map((productdata, index) => {
                console.log(productdata);
                return (
                  <Col md={4} key={index}>
                    <div className="hs-product">
                      <div className="pro-img">
                        <img src="/images/caps.png" alt="cap" />
                      </div>
                      <div className="product_action">
                        <Button variant="light">
                          <FiEye />
                        </Button>
                        <Button variant="light">
                          <FiHeart />
                        </Button>
                      </div>
                      <div className="pro-meta">
                        <div className="cat-name">Fashion</div>
                      
                          <h4>{productdata.product_name}</h4>
                      
                        <div className="price">
                          <span className="sell-price">₹2,340</span>
                          <span className="reg-price">₹4,500</span>
                          <span className="text-primary">46% off</span>
                        </div>
                      </div>
                      <div className="hoverbtn">
                        <button className="btn btn-primary">
                          <FiShoppingBag /> add to cart
                        </button>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Shops;
