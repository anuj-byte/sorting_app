import React from 'react'
import {response} from "./response"
import LeaderBoard from './Leaderboard'

export default function Name(){
    response.sort((a,b)=>a.Name.toLowerCase() > b.Name.toLowerCase() ? 1 : -1);
    return (
        <div className='App'>
            <LeaderBoard response={response}type="name"/>
        </div>
    )
}
