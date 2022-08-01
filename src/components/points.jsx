import React from 'react'
import {response} from "./response"
import LeaderBoard from './Leaderboard'

export default function Points(){
    response.sort((a,b)=>a.Points-b.Points);
    return (
        <div className='App'>
            <LeaderBoard response={response}type="points"/>
        </div>
    )
}
