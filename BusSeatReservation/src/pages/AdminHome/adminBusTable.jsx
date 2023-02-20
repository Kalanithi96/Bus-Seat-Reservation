import React from "react";
import useFetch from "../../Hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {BASE_URL} from "../../Hooks/config"

function AdminBusTable(){

    const navigate = useNavigate();

    const {data: TableData, loading, error} = useFetch(`${BASE_URL}/buses`)

    async function busButtonHandler(event, data){
        
        let id = data
        try{
            const res = await fetch(`${BASE_URL}/buses/${id}`,{
                method:'DELETE',
            })

            const result = await res.json();

            if(!res.ok) alert(result.message)
            else{
                location.reload();
            }
        } catch(err){
            alert(err.message);
        }
    }

    if(loading)
        return <div>Loading...</div>

    if(TableData.length === 0)
        return <div>No matching bus</div>;

    else{
        
        const ThData =()=>{
            
            return (<>
                <th key="busNo">Bus Number</th>
                <th key="from">From</th>
                <th key="to">To</th>
                <th key="totalSeats">Total Seats</th>
                <th key="availableSeats">Available Seats</th>
                <th key="fare">Fare</th>
                <th key="view">View</th>
                <th key="update">Update</th>
                <th key="delete">Delete</th>
                </>
            )
        }
        
        const tdData =() =>{
        
            return TableData.map((data)=>{
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
                        <td key="totalSeats">{data['totalSeats']}</td>
                        <td key="availableSeats">{data['availableSeats']}</td>
                        <td key="fare">{data['fare']}</td>
                        <td key="view">
                            <Link to={`/adminBus/${data['_id']}`}>
                                <button>
                                    <i className="ri-book-line"></i>
                                </button>
                            </Link>
                        </td>
                        <td key="update">
                            <Link to={`/updateBus/${data['_id']}`}>
                                <button>
                                    <i className="ri-book-line"></i>
                                </button>
                            </Link>
                        </td>
                        <td key="delete">
                            <button value={data['_id']}  onClick={ event=>busButtonHandler(event,data['_id']) }>
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