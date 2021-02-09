import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import InputGroup from "react-bootstrap/InputGroup";
import { Container, Row, Col, Button, FormControl } from "react-bootstrap";
import { FiUser, FiHeart, FiShoppingCart, FiSearch, FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

const Header = () => {
  const Headers = styled.div`
    background-color: #fff !important;
    box-shadow: 1px 1px 30px rgba(0, 0, 0, 0.12);
    position: relative;
    width: 100%;
    .btn-info {
      svg {
        font-size:20px;
      }
    }
  `;
  const Topheader = styled.div`
    width: 100%;
    border-bottom:1px solid #ddd;
  `;
  const HeaderIcon = styled.div`
    display:flex;
    align-items: center;
    span {
      display:flex;
      flex-direction:column;
      font-size:14px;
    }
    svg {
      font-size: 30px;
    flex: 0 0 auto;
    width: 46px;
    }
  `;

  return (
    <Headers>
      <Topheader>
        <Container>
          <Row className="align-items-center">
            <Col md={3}>
              <Navbar.Brand href="#home">
                <img src="/logo.png" alt="logo" />
              </Navbar.Brand>
            </Col>
            <Col md={4} className="mx-auto">
              <InputGroup className="mt-2 mb-2">
                <FormControl placeholder="Search" />
                <InputGroup.Append>
                  <Button variant="info">
                    <FiSearch />
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Col>
            <Col md={4}>
              <Row className="align-items-center">
                <Col sm={6}>
                  <HeaderIcon>
                    <FiUser />
                    <span>
                      Welcome
                      <strong>Sign In / Register</strong>
                    </span>
                  </HeaderIcon>
                </Col>
                <Col sm={3} className="p-0">
                  <HeaderIcon>
                    <FiHeart />
                    <span>
                      <strong>Wishlist</strong>
                    </span>
                  </HeaderIcon>
                </Col>
                <Col sm={3}>
                <HeaderIcon>
                    <FiShoppingCart />
                    <span>
                      Cart
                      <strong>100</strong>
                    </span>
                  </HeaderIcon>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Topheader>
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="w-100">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" to="shop">
                    Shops
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/product-details">
                    Product Details
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Logout
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav socialicons ml-auto">
                <li className="nav-item">
                  <Link className="nav-link active" to="shops">
                    <FiFacebook />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/product-details">
                    <FiInstagram />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    <FiTwitter />
                  </Link>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Headers>
  );
};

export default Header;
