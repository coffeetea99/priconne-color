import React, { useState, useEffect } from 'react';
import './MainPage.css';


const MainPage = () => {
  const temporaryDatabase = [
    {name: "페코린느", color: "#f8b36b" },
    {name: "콧코로", color: "#ebe6ea" },
    {name: "캬루", color: "#6c6472" },

    {name: "유이", color: "#fabec2" },
    {name: "레이", color: "#7277b9" },
    {name: "히요리", color: "#ffc873" },
  ]

  const [score, setScore] = useState(0);
  const [curName, setCurName] = useState("");
  const [curColor, setCurColor] = useState("");

  function next(){
    setScore(score + 1);
    var i = Math.floor(Math.random() * 6);
    setCurName(temporaryDatabase[i].name);
    setCurColor(temporaryDatabase[i].color);
  }

  useEffect(() => {
    var i = Math.floor(Math.random() * 6);
    setCurName(temporaryDatabase[i].name);
    setCurColor(temporaryDatabase[i].color);
  }, [])

  return (
    <div className="question" style={{width:"270px", height:"360px", backgroundColor:"#7277b9",}}></div>
  )
}

export default MainPage;
