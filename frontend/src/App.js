import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import IndexPage from './pages/IndexPage/IndexPage';
import MainPage from './pages/MainPage/MainPage';
import ResultPage from './pages/ResultPage/ResultPage';
import RankingPage from './pages/RankingPage/RankingPage';
import './App.css';

function App() {

  const router = (
    <Switch>
      <Route path="/index" exact component={IndexPage}/>
      <Route path="/main" exact component={MainPage}/>
      <Route path="/result" exact component={ResultPage}/>
      <Route path="/ranking" exact component={RankingPage}/>
      <Redirect exact from="" to="/index"/> 
    </Switch>
  );

  return (
    <BrowserRouter>
      <div className="App">
        {router}
      </div>
    </BrowserRouter>
  );
}

export default App;
