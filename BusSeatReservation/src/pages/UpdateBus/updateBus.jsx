import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import useFetch from "../../Hooks/useFetch"
import Header2 from "../../Components/Header/Header2";
import Footer from "../../Components/Footer/Footer";
import { BASE_URL } from "../../Hooks/config";

const UpdateBus = () => {
    const navigate = useNavigate();

    const id = useParams();

    const adminHomeButtonHandler = () =>{
        navigate( "/adminHome" )
    }

    const {data: bus, loading, error} = useFetch(`${BASE_URL}/buses/${id.id}`)

    const [details, setDetails] = useState({
        busNo: bus['busNo'],
        from: bus['from'],
        departure: bus['departure'],
        to: bus['to'],
        arrival: bus['arrival'],
        totalSeats: bus['totalSeats'],
        fare: bus['fare']
    })

    const handleChange = e => {
        setDetails(prev => ({...prev, [e.target.id]:e.target.value }));
    }

    const handleClick = async e=>{
        e.preventDefault();

        try{
            const res = await fetch(`${BASE_URL}/buses/${id.id}`, {
                method:'PUT',
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

    if(loading)
        return <div>Loading...</div>

    else{
        console.log(details)
        return (
            <div>
                <Header2/>
                <form>
                    <div>
                        <span>Bus Number</span>
                        <span>
                            <input type="text" placeholder={details['busNo']} id="busNo" required onChange={handleChange} ></input>
                        </span>
                        <span>{bus['busNo']}</span>
                    </div>
                    <div>
                        <span>From Location</span>
                        <span>
                            <input type="text" placeholder={details['from']} id="from" required onChange={handleChange} />
                        </span>
                        <span>{bus['from']}</span>
                    </div>
                    <div>
                        <span>Departure Timing</span>
                        <span>
                            <input type="datetime-local" placeholder="Departure Timing" id="departure" required onChange={handleChange} />
                        </span>
                        <span>{bus['departure']}</span>
                    </div>
                    <div>
                        <span>To Location</span>
                        <span>
                            <input type="text" placeholder={details['to']} id="to" required onChange={handleChange} />
                        </span>
                        <span>{bus['to']}</span>
                    </div>
                    <div>
                        <span>Arrival Timing</span>
                        <span>
                            <input type="datetime-local" placeholder="Arrival Timing" id="arrival" required onChange={handleChange} />
                        </span>
                        <span>{bus['arrival']}</span>
                    </div>
                    <div>
                        <span>Total Seats</span>
                        <span>
                            <input type="number"  placeholder={details['totalSeats']} id="totalSeats" required onChange={handleChange} />
                        </span>
                        <span>{bus['totalSeats']}</span>
                    </div>
                    <div>
                        <span>Fare</span>
                        <span>
                            <input type="number"  placeholder={details['fare']} id="fare" required onChange={handleChange} />
                        </span>
                        <span>{bus['fare']}</span>
                    </div>
                    <div>
                        <span>
                            <button onClick={adminHomeButtonHandler}>Return to Home Page</button>    
                        </span>
                        <span>
                            <button type="submit" onClick={handleClick}>Update Bus</button>
                        </span>
                    </div>
                </form>
                <Footer/>
            </div>
        );
    }
};

export default UpdateBus;