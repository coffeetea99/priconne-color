import React, { useState } from 'react';
import { useHistory } from 'react-router';

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Modal from 'react-bootstrap/Modal'

import './IndexPage.css';
import logo from '../../logo.png';

const IndexPage = () => {
  const history = useHistory();

  const [show, setShow] = useState(false);    //설명 창이 떠 있냐 아니냐

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Image className="logo" src={logo} rounded />
          </Col>
        </Row>
        <h1>프리코네 머리카락 색깔 퀴즈</h1>
        <div className="buttons">
          <Button variant="primary" onClick={() => history.push('/main')}>시작하기</Button>
          <Button variant="secondary" onClick={()=>setShow(true)}>설명</Button>
        </div>
      </Container>

      <Modal show={show} onHide={()=>setShow(false)}>
        <Modal.Header>
          <Modal.Title>
            프리코네 머리카락 색깔 퀴즈
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>플레이 방법</h5><br/>
          프리코네 캐릭터 중 누군가의 머리카락 색깔이 주어집니다.<br/>
          해당하는 캐릭터의 이름을 입력 창에 적고 enter를 누르면 됩니다.<br/>
          캐릭터 풀은 <b>한국서버 통상 캐릭터</b> 기준입니다.<br/>
          색깔의 기준은 <b>스탠딩 CG(2성 이하 일러), 앞머리, 그림자 없음</b>입니다.<br/>
          틀렸지만 색깔이 비슷한 캐릭터를 입력한 경우, 힌트로 <b>소속 길드</b>를 알려줍니다.<br/>
          100초 동안 가장 많은 캐릭어를 맞히면 됩니다.
        </Modal.Body>
        <Modal.Body>
          <h5>참고사항</h5><br/>
          한 번 등장한 캐릭터가 또 등장할 수 있습니다.<br/>
          쥰은 갑옷 색깔입니다.<br/>
          아카리와 요리는 색깔이 동일합니다. 둘 중 아무나 입력해도 됩니다.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={()=>setShow(false)}>
            닫기
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default IndexPage;
