import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import useFetch from "../../Hooks/useFetch";
import { BASE_URL } from "../../Hooks/config";
import Header2 from "../../Components/Header/Header2";
import Footer from "../../Components/Footer/Footer";
import "./adminBus.css";


const AdminBus = () => {
    const navigate = useNavigate();

    const head = useParams();

    const {data: bus, loading, error} = useFetch(`${BASE_URL}/buses/${head.id}`)

    let [fill, setFill] = useState("")
    let [seat, setSeat] = useState("")
    let [passenger, setPassenger] = useState(null)
    let [user, setUser] = useState(null)

    const emptyButtonHandler = () =>{
        document.querySelectorAll('.select_item').forEach(element=>{
            if(bus['vacant'][element.id]){
                element.classList.add("cannot_select")
            }
        })
    }
    
    async function resetButtonHandler(){
        let seats = []
        document.querySelectorAll('.select_item').forEach(element=>{
            if(!element.classList.contains("cannot_select")){
                seats.push(element.id)
            }
        })

        let det = []

        try{
            const resp = await fetch(`${BASE_URL}/booking/${head.id}`,{
                method:"GET",
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const result = await resp.json();

            if(!resp.ok) alert(result.message)
            else{
                det = result.data;
            }

        }catch(err){
            console.log(err);
        }

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
            const res = await fetch(`${BASE_URL}/buses/bus/reset/${head.id}`, {
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
        /*  else{
                console.log(result.data);
            }*/
        } catch(err){
            alert(err.message);
        }

        location.reload();

    }

    async function singleResetHandler(event, ID, seat){
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
            const res = await fetch(`${BASE_URL}/buses/bus_cancel/${head.id}`, {
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

    async function getPassenger(){
        let userId

        try{
            const res = await fetch(`${BASE_URL}/booking/passenger/${head.id}`, {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    seat:fill
                })
            })

            const result = await res.json();

            if(!res.ok) alert(result.message)
            else{
                setPassenger(result.data)
                userId = result.data.user_id
            }
        } catch(err){
            alert(err.message);
        }

        try{
            const res = await fetch(`${BASE_URL}/users/id/${userId}`, {
                method:'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            const result = await res.json();

            if(!res.ok) alert(result.message)
            else{
                setUser(result.data)
                console.log(result.data)
            }
        } catch(err){
            alert(err.message);
        }
    }

    async function seatHandler(event, index){
        const element = document.getElementById(index);
        document.querySelectorAll('.select_item').forEach(element=>{
            if(element.classList.contains("select_item--selected")){
                element.classList.remove("select_item--selected")
            }
        })
        if(!bus['vacant'][index]){
            if(!element.classList.contains("select_item--selected")){
                element.classList.add("select_item--selected");
                fill = index
                setSeat(index)
                getPassenger();
            }
        }
    }

    const passengerData = () =>{

        if(seat!="" && passenger != null && user != null)
            return (
                    <div>
                        <div>
                            User Name: {user.username}
                        </div>
                        <div>
                            Passenger Name: {passenger.name}
                        </div>
                        <div>
                            Age: {passenger.age}
                        </div>
                        <div>
                            Gender: {passenger.gender}
                        </div>
                        <div>
                            Email: {passenger.email}
                        </div>
                        <div>
                            Phone number: {passenger.phone}
                        </div>
                        <div>
                            <button onClick={(e)=>singleResetHandler(e,passenger._id,passenger.seat)}>Reset</button>
                        </div>
                    </div>
            )
    }

    if(loading)
        return(
            <div>
                <Header2/>
                <h3>Loading...</h3>
                <Footer/>
            </div>
        )
    return (
        <div>
            <Header2/>
                <div className="Big-Container">
                    <div className="Left">
                        <div>
                            Bus Number: {bus['busNo']}
                        </div>
                        <div>
                            <span>
                                From: {bus['from']}                            
                            </span>
                            <span>
                                Departure: {bus['departure']}                            
                            </span>
                        </div>
                        <div>
                            <span>
                                To: {bus['to']}                            
                            </span>
                            <span>
                                Arrival: {bus['arrival']}                            
                            </span>
                        </div>
                        <div>
                            Total Seats: {bus['totalSeats']}
                        </div>
                        <div>
                            Available Seats: {bus['availableSeats']}
                        </div>
                    </div>
                    <div className="Center">
                        <div className="Bus">
                            <div className="select_item" id='A1' onClick={(e)=>seatHandler(e,'A1')}>A1</div>
                            <div className="select_item" id='A2' onClick={(e)=>seatHandler(e,'A2')}>A2</div>
                            <div className="select_item" id='A3' onClick={(e)=>seatHandler(e,'A3')}>A3</div>
                            <div className="select_item" id='B1' onClick={(e)=>seatHandler(e,'B1')}>B1</div>
                            <div className="select_item" id='B2' onClick={(e)=>seatHandler(e,'B2')}>B2</div>                            <div className="select_item" id='B3' onClick={(e)=>seatHandler(e,'B3')}>B3</div>
                            <div className="select_item" id='C1' onClick={(e)=>seatHandler(e,'C1')}>C1</div>
                            <div className="select_item" id='C2' onClick={(e)=>seatHandler(e,'C2')}>C2</div>
                            <div className="select_item" id='C3' onClick={(e)=>seatHandler(e,'C3')}>C3</div>
                            <div className="select_item" id='D1' onClick={(e)=>seatHandler(e,'D1')}>D1</div>
                            <div className="select_item" id='D2' onClick={(e)=>seatHandler(e,'D2')}>D2</div>
                            <div className="select_item" id='D3' onClick={(e)=>seatHandler(e,'D3')}>D3</div>
                            <div className="select_item" id='E1' onClick={(e)=>seatHandler(e,'E1')}>E1</div>
                            <div className="select_item" id='E2' onClick={(e)=>seatHandler(e,'E2')}>E2</div>
                            <div className="select_item" id='E3' onClick={(e)=>seatHandler(e,'E3')}>E3</div>
                            <div className="select_item" id='F1' onClick={(e)=>seatHandler(e,'F1')}>F1</div>
                            <div className="select_item" id='F2' onClick={(e)=>seatHandler(e,'F2')}>F2</div>
                            <div className="select_item" id='F3' onClick={(e)=>seatHandler(e,'F3')}>F3</div>
                            <div className="select_item" id='G1' onClick={(e)=>seatHandler(e,'G1')}>G1</div>
                            <div className="select_item" id='G2' onClick={(e)=>seatHandler(e,'G2')}>G2</div>
                            <div className="select_item" id='G3' onClick={(e)=>seatHandler(e,'G3')}>G3</div>
                        </div>
                        <button onClick={emptyButtonHandler}>
                            Show Empty Seats
                        </button>
                        <button onClick={resetButtonHandler}>
                            Reset All
                        </button>
                    </div>
                    <div className="Right">
                        <div>
                            {seat}
                            { passengerData() }
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    );
};

export default AdminBus;