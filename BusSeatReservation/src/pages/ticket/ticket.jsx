import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import { BASE_URL } from "../../Hooks/config";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Context/authContext";
import Header1 from "./../../Components/Header/Header1";
import Footer from "../../Components/Footer/Footer";

const Ticket = () => {
    const navigate = useNavigate();

    const id = useParams();

    const {user, dispatch} = useContext(AuthContext)
    const {data: userData, uloading, uerror} = useFetch(`${BASE_URL}/users/${user.username}`)

    const bookingsButtonHandler = () =>{
        navigate( `/bookings/${userData['_id']}` )
    }

    const [det, setDet] = useState([]);
    const [bus, setBus] = useState({});
    let [seats, setSeats] = useState([]);

    const detailsHandler = async () =>{
        try{
            const res = await fetch(`${BASE_URL}/booking/bus/${id.id}`, {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    u_id:userData['_id']
                })
            })

            const result = await res.json();

            if(!res.ok) alert(result.message)
            else{
                setDet(result.data);
            }
        } catch(err){
            alert(err.message);
        }

        try{
            const res = await fetch(`${BASE_URL}/buses/${id.id}`, {
                method:'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            const result = await res.json();

            if(!res.ok) alert(result.message)
            else{
                setBus(result.data);
            }
        } catch(err){
            alert(err.message);
        }
    }

    async function cancelHandler(event, ID, seat){
        try{
            const res = await fetch(`${BASE_URL}/booking/${ID}`, {
                method:'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            const result = await res.json();

            if(!res.ok) alert(result.message)
            else{
                console.log(result.data);
            }
        } catch(err){
            alert(err.message);
        }

        try{
            const res = await fetch(`${BASE_URL}/buses/bus_cancel/${id.id}`, {
                method:'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fill:seat
                })
            })

            const result = await res.json();

            if(!res.ok) alert(result.message)
            else{
                console.log(result.data);
            }
        } catch(err){
            alert(err.message);
        }

        location.reload();
    }

    async function bulkCancelHandler(){
        let temp = []
        det.map((record)=>{
            temp.push(record.seat)
        })
        seats = temp

        try{
            det.map(async(record)=>{

                const resp = await fetch(`${BASE_URL}/booking/${record._id}`,{
                    method:"DELETE",
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                if(resp.status == 200){
                    console.log(record.seat+" deleted");
                }

            })
            
        }catch(err){
            console.log(err);
        }

        try{
            const res = await fetch(`${BASE_URL}/buses/bus/reset/${id.id}`, {
                method:'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fill:seats
                })
            })

            const result = await res.json();

            if(!res.ok) alert(result.message)
        /*else{
                console.log(result.data);
            }*/
        } catch(err){
            alert(err.message);
        }

        navigate('/customerHome');

    }

    if(det.length == 0){
        return(
            <div>
                <Header1/>
                <button onClick={detailsHandler}>Get Details</button>
                <h4>Loading...</h4>
                <Footer/>
            </div>
        )
    }
    else{
        return (
            <div>
                <Header1/>
                    <div>
                        <div>
                            Ticket
                        </div>
                        <div>
                            From: {bus.from} {bus.departure}
                        </div>
                        <div>
                            To: {bus.to} {bus.arrival}
                        </div>
                    </div>
                    <table border = "3">
                        <tr>
                            <td>Seat Number</td>
                            <td>Passenger Name</td>
                            <td>Age</td>
                            <td>Gender</td>
                            <td>Email</td>
                            <td>Phone</td>
                            <td>Fare</td>
                            <td>Cancel</td>
                        </tr>
                    {
                        det.map((record)=>(
                        <tr>
                            <td>{record.seat}</td>
                            <td>{record.name}</td>
                            <td>{record.age}</td>
                            <td>{record.gender}</td>
                            <td>{record.email}</td>
                            <td>{record.phone}</td>
                            <td>Rs.{bus.fare}</td>
                            <td>
                                <button onClick={(e)=>cancelHandler(e,record._id,record.seat)}>Cancel</button>
                            </td>
                        </tr>))
                    }
                    </table>
                    <div>
                        <span>
                            Tax: Rs. 0
                        </span>
                        <span>
                            Total Fare: Rs. {bus.fare * det.length}
                        </span>
                    </div>
                    <div>
                        <span>
                            <button onClick={bookingsButtonHandler}>Return to Bookings Page</button>
                        </span>
                        <span>
                            <button onClick={bulkCancelHandler}>Cancel Ticket</button>
                        </span>
                        <span>
                            <button>Print Ticket</button>
                        </span>
                    </div>
                <Footer/>
            </div>);
    }
};

export default Ticket;