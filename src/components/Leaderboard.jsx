import React  from 'react'
import {response} from './response'
import {Button} from 'react-bootstrap'
import {Row,Table} from 'react-bootstrap'
import "./style.css"
import {useNavigate } from 'react-router-dom'

export default function LeaderBoard(props){
    const data =response
    const navigate=useNavigate()



    return (
            
    <div className='container'>
        <Row justify="center" >
                <div>
                    <Button data-testid="route-rank" variant="outline-success" className="mx-2" type='button' onClick={()=>navigate("/rank")}>Rank </Button>

                    <Button data-testid="route-point" className="mx-2" variant="outline-success" onClick={()=>navigate("/points")}>
                      Point  
                    </Button>
                    
                    <Button data-testid= "route-name" variant="outline-success" className="mx-2"  onClick={()=>navigate("/name")}> Name </Button>
                   
                    
                    <Button data-testid="route-age" variant="outline-success" className="mx-2" onClick={()=>navigate("/age")}> Age
                    </Button>
                </div>
        </Row>
        <Table striped bordered hover variant="dark" className='move' data-testid="app-table">
            <thead>
                <th>Rank</th>
                <th>Points</th>
                <th>Name</th>
                <th>Age</th>
            </thead>
            <tbody data-testid="app-body">
                {data.map((d)=>(
                    <tr key={d.id}>
                        <td>{d.Rank}</td>
                        <td>{d.Points}</td>
                        <td>{d.Name}</td>
                        <td>{d.Age}</td>
                        
                    </tr>
                ))}
                       

            </tbody>
        </Table>

    </div>
)
}

