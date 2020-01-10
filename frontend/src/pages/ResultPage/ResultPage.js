import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

import rankingDB from '../../db/ranking.json';
import kokoro from './kokoro.png';

const ResultPage = (props) => {
  const history = useHistory();

  return (
    props.location.state === undefined ?
    <>
      <h1>잘못된 접근입니다.</h1>
      <img src={kokoro} />
    </>
    :
    <>
      <h1>result: {props.location.state.score}</h1>
      <button onClick={()=>history.push('index')}>return to main page</button>
    </>
  )
}

export default ResultPage;