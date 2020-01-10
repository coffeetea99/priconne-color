import React from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import rankingDB from '../../db/ranking.json';

const RankingPage = () => {
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
      <h1>랭킹</h1><br/>
      <Container>
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
