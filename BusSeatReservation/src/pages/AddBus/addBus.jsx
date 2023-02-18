import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header2 from "../../Components/Header/Header2";
import Footer from "../../Components/Footer/Footer";

const AddBus = () => {
    const navigate = useNavigate();

    const adminHomeButtonHandler = () =>{
        navigate( "/adminHome" )
    }

    const [busNo,setBusNo] = useState('')
    const [from,setFrom] = useState('')
    const [to,setTo] = useState('')
    const [arrival,setArrival] = useState('')
    const [departure,setDeparture] = useState('')
    const [seats,setSeats] = useState(0)

    async function submit(e){

        e.preventDefault()

        let x = await fetch('http://localhost:4000/api/v1/buses', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                busNo,
                from,
                departure,
                to,
                arrival,
                seats
            })
        })


        if(x.status === 200){
            const res = await fetch(`http://localhost:4000/api/v1/buses`,{method:"GET"})
    
            if(!res.ok)
                alert("Something went wrong");

            const result = await res.json();

            navigate('/adminHome',{state:result.data})
        }
        else
            alert("Unmatching Username/Password");
    };

    return (
        <div>
            <Header2/>
            <form onSubmit={submit}>
                <div>
                    <span>Bus Number</span>
                    <span>
                        <input type="text" placeholder="Bus Number" onChange={(e)=>{setBusNo(e.target.value)}}></input>
                    </span>
                </div>
                <div>
                    <span>From Location</span>
                    <span>
                        <input type="text" placeholder="From Location" onChange={(e)=>{setFrom(e.target.value)}}/>
                    </span>
                </div>
                <div>
                    <span>Departure Timing</span>
                    <span>
                        <input type="datetime-local" placeholder="Departure Timing" onChange={(e)=>{setDeparture(e.target.value)}}/>
                    </span>
                </div>
                <div>
                    <span>To Location</span>
                    <span>
                        <input type="text" placeholder="To Location" onChange={(e)=>{setTo(e.target.value)}}/>
                    </span>
                </div>
                <div>
                    <span>Arrival Timing</span>
                    <span>
                        <input type="datetime-local" placeholder="Arrival Timing" onChange={(e)=>{setArrival(e.target.value)}}/>
                    </span>
                </div>
                <div>
                    <span>Seats</span>
                    <span>
                        <input type="number" placeholder="No of seats" onChange={(e)=>{setSeats(e.target.value)}}/>
                    </span>
                </div>
                <div>
                    <span>
                        <button onClick={adminHomeButtonHandler}>Return to Home Page</button>    
                    </span>
                    <span>
                        <button type="submit">Add Bus</button>
                    </span>
                </div>
            </form>
            <Footer/>
        </div>
    );
};

export default AddBus;