import React  from 'react'
import {response} from './response'
import { useState } from 'react'
import {Button} from 'react-bootstrap'
import {Row,Table} from 'react-bootstrap'
import "./style.css"
import { BrowserRouter,Routes,Route,Link, Router ,useNavigate} from 'react-router-dom'



export default  function SortTable(){
    const [data,setdata] = useState(response)
    const [order,setorder] = useState("ASC")
    const sorting =(col)=>{
        if (col){
            const sorted = [...data].sort((a,b)=> {
                if (a[col] === null) return 1;
                if(b[col] === null)return -1;
                if(a[col ] === null && b[col] === null) return 0;
                return (
                    a[col].toString().localeCompare(b[col].toString(),"en",{
                        numeric:true,
                    })
                    *(order === "ASC" ? 1 : -1)
                );
            });
            setdata(sorted);
            /*if (order === "ASC"){
                const sorted = [...data].sort((a,b)=>
                    a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
                );
                setdata(sorted);
                setorder("DSC");

            }
            if (order === "DSC"){
                const sorted = [...data].sort((a,b)=>
                    a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
                );
                setdata(sorted);
                setorder("ASC");
        }*/
    }
    
        
        
    };
    return (
            
        <div className='container'>
            <Row justify="center" >
                <BrowserRouter>
                    <div>
                        <Button data-testid="route-rank" variant="outline-success" className="mx-2"  onClick={()=>sorting("Rank")} >
                                <Link to="/rank" className='link' >
                                    Rank
                                </Link>
                            </Button>

                        <Button data-testid="route-point" className="mx-2" variant="outline-success" onClick={()=>sorting("Points")}>
                            <Link to="/point" className='link' >
                                Point
                            </Link>
                        </Button>
                        
                        <Button data-testid= "route-name" variant="outline-success" className="mx-2"  onClick={()=>sorting("Name")}>
                            <Link to="/name" className='link'>
                                Name
                            </Link>
                        </Button>
                       
                        
                        <Button data-testid="route-age" variant="outline-success" className="mx-2" onClick={()=>sorting("Age")}> 
                            <Link to="/age" className='link'>
                                Age
                            </Link>
                        </Button>
                    </div>
                </BrowserRouter>
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