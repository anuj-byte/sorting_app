import './App.css';
import LeaderBoard from './components/Leaderboard'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import React from "react";
import "h8k-components"
import Rank from './components/rank';
import Points from './components/points';
import Name from './components/name';
import Age from './components/age';
import "../src/components/style.css"
const title ="SPA -LeaderBoard"


function App() {
  return (
    <div className="App">
      <h2 className='use'>{title}</h2>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<LeaderBoard/>}></Route>
          <Route path="/rank" element={<Rank/>}></Route>
          <Route path="/points" element={<Points/>}></Route>
          <Route path="/name" element={<Name/>}></Route>
          <Route path="/age" element={<Age/>}></Route>
        </Routes>      
      </BrowserRouter>
  
  
  
 
    </div>
  );
}

export default App;
