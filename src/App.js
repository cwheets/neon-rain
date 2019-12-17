
import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home/home.js";
import Leaderboards from "./pages/leaderboard"
import BattlePage from "./pages/battleArea"
import RegisterNew from "./pages/auth/register2";
import LoginNew from "./pages/auth/newLogin";
import Save from "./pages/award/index.js";
import Storypage from "./pages/storypage"


function App() {

  
  return (

   
      <Router>
        <div>
  
        <Route exact path="/rules" component={Leaderboards} />
        <Route exact path="/" component={Home} />   
        <Route exact path="/battlepage" component={BattlePage} />  
        <Route exact path="/registerNew" component={RegisterNew} />
          <Route exact path="/loginNew" component={LoginNew} />
          <Route exact path="/award" component={Save} />
          <Route exact path="/storypage" component={Storypage} />
      </div>
        </Router>

   

  );
}


export default App
