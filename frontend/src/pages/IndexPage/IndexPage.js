import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Button from 'react-bootstrap/Button'
import logo from '../../logo.png';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import './IndexPage.css';


const IndexPage = () => {
  const history = useHistory();

  const [show, setShow] = useState(false);

  return (
    <Container>
      <Row>
        <Col>
          <Image className="logo" src={logo} rounded/>
        </Col>
      </Row>
      <h1>프리코네 머리카락 색상 퀴즈</h1>
      <div className="buttons">
        <Button variant="primary" onClick={() => history.push('/main')}>시작하기</Button>
        <Button variant="secondary">설명</Button>
        <Button variant="success" onClick={() => history.push('/ranking')}>랭킹</Button>
      </div>

    </Container>

  )
}

export default IndexPage;
