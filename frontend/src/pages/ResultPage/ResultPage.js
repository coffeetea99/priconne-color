import React from 'react';
import { useHistory } from 'react-router';

import Button from 'react-bootstrap/Button';

import './ResultPage.css';
import kokoro from './kokoro.png';
import good from '../../db/result/good.png';
import normal from '../../db/result/normal.png';
import bad from '../../db/result/bad.png';

const ResultPage = (props) => {
  const history = useHistory();
  const score = props.location.state.score;

  return (
    props.location.state === undefined ?
      <>
        <h1>잘못된 접근입니다.</h1>
        <img src={kokoro} alt="invalid access" />
      </>
      :
      <>
        <h3 id="final-score">점수: {score}점</h3>
        {(score < 9) && <img id="picture" src={bad} alt="bad score" />}
        {(9 <= score && score < 20) && <img id="picture" src={normal} alt="normal score" />}
        {(20 <= score) && <img id="picture" src={good} alt="good score"/>}
        <div className="buttons">
          <Button variant="primary" onClick={() => history.push('/main')}>재도전</Button>
          <Button variant="info" onClick={() => history.push('/index')}>메인 메뉴</Button>
        </div>
      </>
  )

}

export default ResultPage;