import React, { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';

import './MainPage.css';
import database from '../../db/character.json';

const MainPage = () => {
  const data = database;
  const length = data.length;

  const [score, setScore] = useState(0);                                      //현재 점수
  const [curName, setCurName] = useState("");                                 //현재 캐릭터 이름
  const [curColor, setCurColor] = useState("");                               //현재 캐릭터 색깔
  const [curGuild, setCurGuild] = useState("");                               //현재 캐릭터 길드
  const [description, setDescription] = useState("이 캐릭터는 누구일까요?");    //현재 상태(첫째 줄)
  const [hint, setHint] = useState("-");                                      //힌트 메시지(둘째 줄)
  const [answer, setAnswer] = useState("");                                   //유저가 입력한 정답

  function shuffle(){
    var i = Math.floor(Math.random() * length);
    setCurName(data[i].name);
    setCurColor(data[i].color);
    setCurGuild(data[i].guild);
    //console.log(data[i].name, data[i].color);
  }

  useEffect(() => {
    shuffle();
  }, [])

  const similar = (answer) => {
    const find = data.find(character => character.name === answer);

    if ( find === undefined ) {   //그런 캐릭터 없다
      return "";
    }

    const curRed = parseInt("0x" + curColor.substring(1, 3));
    const curGreen = parseInt("0x" + curColor.substring(3, 5));
    const curBlue = parseInt("0x" + curColor.substring(5, 7));

    const answerColor = find.color;
    
    const answerRed = parseInt("0x" + answerColor.substring(1, 3));
    const answerGreen = parseInt("0x" + answerColor.substring(3, 5));
    const answerBlue = parseInt("0x" + answerColor.substring(5, 7));

    //console.log("정답인 애 RGB: " + curRed + " " + curGreen + " " + curBlue);
    //console.log("입력한 애 RGB: " + answerRed + " " + answerGreen + " " + answerBlue);
    
    if ( Math.abs(curRed - answerRed) + Math.abs(curGreen - answerGreen) + Math.abs(curBlue - answerBlue) <= 50 ) {
      return curGuild;
    } else {
      return "";
    }
  }

  const handleSubmit = event => {
    event.preventDefault();
    if (answer === curName || (answer === "아카리" && curName === "요리") || (answer === "요리" && curName === "아카리")) {
      //정답!
      setScore(score + 1);
      setDescription("맞았습니다!");
      setHint("-");
      setAnswer("");
      shuffle();
    } else {
      //틀렸습니다!
      setDescription(`${answer}가 아닙니다!`);
      const curGuild = similar(answer);
      if ( curGuild !== "" && hint === "-") {
        //현재 캐릭터와 비슷한 색깔의 캐릭터를 입력했을 경우, 현재 캐릭터의 길드를 힌트로 보여줌
        setHint("힌트: " + curGuild);
      }
      setAnswer("");
    }
  }

  return (
    <div>
      <div className="question" style={{ width: "270px", height: "360px", backgroundColor: curColor, }}>
        <h1 className="counter"></h1>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="answer">
          <Form.Label>{description}<br/>{hint}</Form.Label>
          <Form.Control size="lg" type="string" placeholder="정답" value={answer} onChange={(event)=>setAnswer(event.target.value)} autoFocus={true}/>
        </Form.Group>
      </Form>
    </div>
  )
}

export default MainPage;
