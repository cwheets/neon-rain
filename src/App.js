
import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home/home.js";
import Leaderboards from "./pages/leaderboard"
import BattlePage from "./pages/battleArea"
import RegisterOne from "./pages/auth/register3";
import LoginNew from "./pages/auth/login2";
import Save from "./pages/award/index.js";
import Storypage from "./pages/storypage"
import Register from "./pages/auth/register";


function App() {

  
  return (

   
      <Router>
        <div>
  
        <Route exact path="/rules" component={Leaderboards} />
        <Route exact path="/" component={Home} />   
        <Route exact path="/battlepage" component={BattlePage} />  
        <Route exact path="/registerNew" component={RegisterOne} />
        {/* <Route exact path="/register" component={Register} /> */}
          <Route exact path="/loginNew" component={LoginNew} />
          <Route exact path="/award" component={Save} />
          <Route exact path="/storypage" component={Storypage} />
      </div>
        </Router>

   

  );
}


export default App
