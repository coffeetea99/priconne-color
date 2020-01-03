import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import IndexPage from './pages/IndexPage/IndexPage';
import MainPage from './pages/MainPage/MainPage';
import './App.css';

function App() {

  const router = (
    <Switch>
      <Route path="/index" exact component={IndexPage}/>
      <Route path="/main" exact component={MainPage}/>
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
