import React from 'react';
import { useHistory } from 'react-router';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import rankingDB from '../../db/ranking.json';
import './RankingPage.css';

const RankingPage = () => {
  const history = useHistory();

  const rankingList = rankingDB.map(
    (rank, index) => {
      return (
        <Row>
          <Col md="3"><h3>{index+1}</h3></Col>
          <Col md="6"><h3>{rank.name}</h3></Col>
          <Col md="3"><h3>{rank.score}</h3></Col>
        </Row>
      )
    }
  );

  return (
    <>
      <Container id="ranking-sheet">
        <Row>
          <Col md="3"/>
          <Col md="6"><h1>랭킹</h1></Col>
          <Col md="3"><Button variant="info" onClick={()=>history.push('/index')}>메인 메뉴로</Button></Col>
        </Row>
        <br/>
        <Row>
          <Col md="3"><h3>순위</h3></Col>
          <Col md="6"><h3>이름</h3></Col>
          <Col md="3"><h3>점수</h3></Col>
        </Row>
        {rankingList}
      </Container>
    </>
  )
}

export default RankingPage;
