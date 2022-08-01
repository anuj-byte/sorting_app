import React from 'react'
import {response} from "./response"
import LeaderBoard from './Leaderboard'

export default function Age(){
    response.sort((a,b)=>a.Age-b.Age);
    return (
        <div className='App'>
            <LeaderBoard response={response}type="age"/>
        </div>
    )
}
