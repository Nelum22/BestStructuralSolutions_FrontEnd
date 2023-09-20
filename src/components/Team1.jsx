import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

const hiran= new URL("../images/mr.hiran.png", import.meta.url)

function Team1() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src={hiran} roundedCircle />
        </Col>
      </Row>
    </Container>
  );
}

export default Team1;