import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './MainPage.css';
import characterDB from '../../db/character.json';

const MainPage = () => {
  const history = useHistory();

  const data = characterDB;
  const length = data.length;

  const [score, setScore] = useState(0);                                      //현재 점수
  const [curName, setCurName] = useState("");                                 //현재 캐릭터 이름
  const [curColor, setCurColor] = useState("");                               //현재 캐릭터 색깔
  const [curGuild, setCurGuild] = useState("");                               //현재 캐릭터 길드
  const [description, setDescription] = useState("이 캐릭터는 누구일까요?");    //현재 상태(첫째 줄)
  const [hint, setHint] = useState("-");                                      //힌트 메시지(둘째 줄)
  const [answer, setAnswer] = useState("");                                   //유저가 입력한 정답
  const [time, setTime] = useState(120);                                      //남은 시간(초)

  function shuffle(){
    const i = Math.floor(Math.random() * length);
    setCurName(data[i].name);
    setCurColor(data[i].color);
    setCurGuild(data[i].guild);
    //console.log(data[i].name, data[i].color);
  }

  useEffect(()=>{
    shuffle();
    // eslint-disable-next-line
  }, [data, length]);

  useEffect(() => {
    const interval = setInterval(()=>{
      setTime(time => time-1);
      if ( Number(time) <= 0 ) {
        history.push({
          pathname: '/result',
          state: { score: score }
        })
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [time, score, history]);

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
    if (answer === "") {
      //모르겠다
      setDescription(`정답은 ${curName}였습니다!`);
      setHint("-");
      setTime(time < 10 ? 0 : time-10);
      shuffle();
    }
    else if (answer === curName || (answer === "아카리" && curName === "요리") || (answer === "요리" && curName === "아카리")) {
      //정답!
      setScore(score + 1);
      setDescription("맞았습니다!");
      setHint("-");
      setAnswer("");
      shuffle();
    } else {
      //틀렸습니다!
      setTime(time-1);
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
    <>
      <Container>
        <Row>
          <Col>
            <h3 id="score">점수: {score}</h3>
          </Col>
          <Col md="6">
            <div className="question" style={{ width: "270px", height: "360px", backgroundColor: curColor, }}>
              {/*<h1 className="counter">countdown</h1>*/}
            </div>
          </Col>
          <Col>
            <h3 id="time-left">남은 시간: {time}초</h3>
          </Col>
        </Row>
      </Container>

      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>{description}<br />{hint}</Form.Label>
          <Form.Control id="answer" size="lg" type="string" placeholder="빈 칸에 enter => 패스" value={answer} onChange={(event) => setAnswer(event.target.value)} autoFocus={true} />
        </Form.Group>
      </Form>
    </>
  )
}

export default MainPage;
