import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

import rankingDB from '../../db/ranking.json';
import kokoro from './kokoro.png';
import './ResultPage.css';

const ResultPage = (props) => {
  const history = useHistory();
  const score = props.location.state.score;

  const [currentRanking, setCurrentRanking] = useState(0);
  const [tie, setTie] = useState(false);

  const [name, setName] = useState("")

  useEffect(()=>{
    var temp = 1;
    rankingDB.forEach(element => {
      if ( element.score > score ) {
        temp = temp + 1;
      } else if ( element.score === score ) {
        setTie(true);
      }
    });
    setCurrentRanking(temp);
  }, [currentRanking, tie]);

  const handleSubmit = event => {
    //구현되지 않음
  }

  return (
    props.location.state === undefined ?
      <>
        <h1>잘못된 접근입니다.</h1>
        <img src={kokoro} />
      </>
      :
      <>
        <h3 id="score">점수: {score}점</h3>
        <h3>현재 {tie && "공동 "}{currentRanking}등</h3>
        <div id="submit">
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>이름을 입력하면 랭킹에 등록할 수 있습니다.</Form.Label>
              <Form.Control type="string" placeholder="이름" value={name} onChange={(event) => setName(event.target.value)} autoFocus={true}></Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
              랭킹 등록
            </Button>
          </Form>
        </div>
        <div className="buttons">
          <Button variant="primary" onClick={() => history.push('/main')}>시작하기</Button>
          <Button variant="success" onClick={() => history.push('/ranking')}>랭킹 확인</Button>
        </div>
      </>
  )
}

export default ResultPage;