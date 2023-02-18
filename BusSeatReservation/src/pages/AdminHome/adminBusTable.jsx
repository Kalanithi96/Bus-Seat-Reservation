import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AdminBusTable(){
    const location = useLocation();

    const [Tabledata] = useState(location.state)

    function busButtonHandler(){
        console.log("hell")
    }

    if(Tabledata.length === 0)
        return <div>No matching bus</div>;

    else{
        
        const ThData =()=>{
            
            return (<>
                <th key="busNo">Bus Number</th>
                <th key="from">From</th>
                <th key="to">To</th>
                <th key="seats">Available Seats</th>
                <th key="view">View</th>
                <th key="update">Update</th>
                <th key="delete">Delete</th>
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
                        <td key="view">
                            <button value={data['id']} onClick={busButtonHandler}>
                                <i className="ri-book-line"></i>
                            </button>
                        </td>
                        <td key="update">
                            <button value={data['id']} onClick={busButtonHandler}>
                                <i className="ri-book-line"></i>
                            </button>
                        </td>
                        <td key="delete">
                            <button value={data['id']} onClick={busButtonHandler}>
                                <i className="ri-book-line"></i>
                            </button>
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
    export default AdminBusTable;