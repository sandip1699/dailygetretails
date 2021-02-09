import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

function Breadcumbs(props) {
  const Bredcumbmenu = styled.div`
    background-color: #e6fff8;
    li {
        position:relative;
        a {
            color:#000;
        }
        a:first-child {
            padding-left:10px;
        }
    }
    & li:after {
      content: "/";
      display: inline-block;
      position: absolute;
      right: 0;
      top:8px;
    }
    & li:last-child:after {
        display:none;
    }
  `;

  return (
    <Bredcumbmenu>
      <Container>
        <Nav as="ul">
          <Nav.Item as="li">
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-1">{props.page}</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Bredcumbmenu>
  );
}

export default Breadcumbs;
