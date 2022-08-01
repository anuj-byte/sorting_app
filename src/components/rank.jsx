import React from 'react'
import {response} from "./response"
import LeaderBoard from './Leaderboard'

function Rank(){
    response.sort((a,b)=>a.Rank-b.Rank);
    return (
        <div className='App'>
            <LeaderBoard response={response}type="rank"/>
        </div>
    )
}
export default Rank