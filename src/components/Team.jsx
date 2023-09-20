import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

const home= new URL("../images/mr.indika.jpg", import.meta.url)

function Team() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src={home} roundedCircle />
        </Col>
      </Row>
    </Container>
  );
}

export default Team;