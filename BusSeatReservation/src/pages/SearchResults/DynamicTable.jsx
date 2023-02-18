import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

function DynamicTable(){
    const navigate = useNavigate();

    const location = useLocation();

    const [Tabledata] = useState(location.state)

    if(Tabledata.length === 0)
        return <div>No matching bus</div>;

    else{
        
        const ThData =()=>{
            
            return (<>
                <th key="busNo">Bus Number</th>
                <th key="from">From</th>
                <th key="to">To</th>
                <th key="seats">Available Seats</th>
                <th key="book">Book</th>
                </>
            )
        }
        
        const tdData =() =>{
        
            return Tabledata.map((data)=>{
            return(
                <tr id = {data['id']}>
                        <td key="busNo">{data['busNo']}</td>
                        <td key="from">
                            <div>{data['from']}</div>
                            <div>{data['departure']}</div>
                        </td>
                        <td key="to">
                            <div>{data['to']}</div>
                            <div>{data['arrival']}</div>
                        </td>
                        <td key="seats">{data['seats']}</td>
                        <td key="book">
                            <Link to={`/bus/${data['_id']}`}>
                                <button>
                                    <i className="ri-book-line"></i>
                                </button>
                            </Link>
                        </td>
                </tr>
            )
            })
        }
    
    
        return (
          <table className="table">
            <thead>
             <tr>{ThData()}</tr>
            </thead>
            <tbody>
            {tdData()}
            </tbody>
           </table>
      )}
    }
    export default DynamicTable;