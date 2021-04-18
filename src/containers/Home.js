import React from "react";
import "./Home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

export default function Home() {
  return (
    
      <Container fluid>
      <Row>
          <Col sm={12} xs={12} md={6}>
            <Image src="./photo.jpg" fluid />
          </Col>
        
          <Col  sm={12} xs={12} md={6}>
              <h2 class="intro-header mt-2 ml-2">
                  Hi, I'm Gina. 
              </h2>
              {/* <p class="ml-2">
                  I'm a software engineer out of the Seacoast NH area.
              </p> */}
              
          </Col>
      </Row>
      </Container>
    
    
  );
}