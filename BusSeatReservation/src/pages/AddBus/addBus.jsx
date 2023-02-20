import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header2 from "../../Components/Header/Header2";
import Footer from "../../Components/Footer/Footer";
import { BASE_URL } from "../../Hooks/config";

const AddBus = () => {
    const navigate = useNavigate();

    const adminHomeButtonHandler = () =>{
        navigate( "/adminHome" )
    }

    const [details, setDetails] = useState({
        busNo: undefined,
        from: undefined,
        departure: undefined,
        to: undefined,
        arrival: undefined,
        totalSeats: 0,
        availableSeats: 0,
        fare: 0,
        vacant: undefined
    })

    const handleChange = e => {
        setDetails(prev => ({...prev, [e.target.id]:e.target.value }));
    }

    const handleClick = async e=>{
        e.preventDefault();
        details['availableSeats'] = details['totalSeats']
        details['vacant'] = {'A1':true,'A2':true,'A3':true,
                             'B1':true,'B2':true,'B3':true,
                             'C1':true,'C2':true,'C3':true,
                             'D1':true,'D2':true,'D3':true,
                             'E1':true,'E2':true,'E3':true,
                             'F1':true,'F2':true,'F3':true,
                             'G1':true,'G2':true,'G3':true};
        try{
            const res = await fetch(`${BASE_URL}/buses`, {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(details)
            })

            const result = await res.json();

            if(!res.ok) alert(result.message)
            else{
                navigate('/adminHome');
            }
        } catch(err){
            alert(err.message);
        }

    }

    return (
        <div>
            <Header2/>
            <form>
                <div>
                    <span>Bus Number</span>
                    <span>
                        <input type="text" placeholder="Bus Number" id="busNo" required onChange={handleChange} ></input>
                    </span>
                </div>
                <div>
                    <span>From Location</span>
                    <span>
                        <input type="text" placeholder="From Location" id="from" required onChange={handleChange} />
                    </span>
                </div>
                <div>
                    <span>Departure Timing</span>
                    <span>
                        <input type="datetime-local" placeholder="Departure Timing" id="departure" required onChange={handleChange} />
                    </span>
                </div>
                <div>
                    <span>To Location</span>
                    <span>
                        <input type="text" placeholder="To Location" id="to" required onChange={handleChange} />
                    </span>
                </div>
                <div>
                    <span>Arrival Timing</span>
                    <span>
                        <input type="datetime-local" placeholder="Arrival Timing" id="arrival" required onChange={handleChange} />
                    </span>
                </div>
                <div>
                    <span>Seats</span>
                    <span>
                        <input type="number" placeholder="No of seats" id="totalSeats" required onChange={handleChange} />
                    </span>
                </div>
                <div>
                    <span>Fare</span>
                    <span>
                        <input type="number" placeholder="Fare" id="fare" required onChange={handleChange} />
                    </span>
                </div>
                <div>
                    <span>
                        <button onClick={adminHomeButtonHandler}>Return to Home Page</button>    
                    </span>
                    <span>
                        <button type="submit" onClick={handleClick}>Add Bus</button>
                    </span>
                </div>
            </form>
            <Footer/>
        </div>
    );
};

export default AddBus;