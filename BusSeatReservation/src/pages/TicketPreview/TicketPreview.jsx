import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/authContext";
import useFetch from "../../Hooks/useFetch";
import { BASE_URL } from "../../Hooks/config";
import Header1 from "../../Components/Header/Header1";
import Footer from "../../Components/Footer/Footer";
import StripeCheckOut from "react-stripe-checkout";
import axios from "axios";

const PassengerDetails = () => {
    const navigate = useNavigate();

    const head = useParams();
    const location = useLocation();

    const {user, dispatch} = useContext(AuthContext)
    const {data: userData, uloading, uerror} = useFetch(`${BASE_URL}/users/${user.username}`)
    const id=userData['_id']

    const {data: bus, loading, error} = useFetch(`${BASE_URL}/buses/${head.id}`)

    let pass = location.state.pass;
    let contact = location.state.contact;
    let fill = location.state.fill;

    const passengerButtonHandler = () =>{
        navigate( `/passenger/${head.id}`, {state:fill} )
    }

    const publishableKey="pk_test_51MdY41SHtFjqIyhtA6iF4VzoJWeLAP1KTNx68m5XYah4owP7jmsXHFJjfn8GD8AItPXFnxku0IHKf9MJIEvj9NjW00qZIXuHUn";

    const createBooking = async ()=>{
            try{
                pass.map(async(record)=>{

                    const resp = await fetch(`${BASE_URL}/booking/`,{
                        method:"POST",
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body:JSON.stringify({
                            bus_id: head.id,
                            user_id: id,
                            phone: contact.phone,
                            email:contact.email,
                            name:record.name,
                            age:record.age,
                            gender:record.gender,
                            seat:record.seatNumber
                        })
                    })
                    if(resp.status == 200){
                        console.log(record.seatNumber+" added");
                    }

                })
                
            }catch(err){
                console.log(err);
            }
    }

    const updateBus = async ()=>{
            try{
                const res = await fetch(`${BASE_URL}/buses//bus/${head.id}`,{
                    method:"PUT",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body:JSON.stringify({
                        fill:fill
                    })
                })
 
                if(!res.ok)
                    alert("Something went wrong");

                const result = await res.json();
                console.log("Update was successful");
                console.log(result.data)
                
            }catch(err){
                console.log(err);
            }
    }

    const payNow = async token => {
        try{
            const response = await axios({
                url:"http://localhost:4000/payment",
                method:"POST",
                data:{
                    amount: bus['fare'] * pass.length * 100,
                    token
                }
            })
            if(response.status == 200){
                updateBus();
                createBooking();
                navigate('/customerHome');
            }
        }catch(error){
            console.log(error);
        }
    };

    return (
        <div>
            <Header1/>
            <div>
                <div>
                    Ticket Preview  
                </div>
                <div>
                    <span>
                        From: {bus['from']} {bus['departure']}
                    </span>
                    <span>
                        To: {bus['to']} {bus['arrival']}
                    </span>
                </div>
                <div>
                    Contact Details:
                </div>
                <div>
                    <span>
                        Phone: {contact.phone}
                    </span>
                    <span>
                        Email: {contact.email}
                    </span>
                </div>
            </div>
            <table border = "1">
                <tr>
                    <td>Passenger Name</td>
                    <td>Age</td>
                    <td>Gender</td>
                    <td>Fare</td>
                </tr>
         
                {
                    pass.map((ind)=>(
                        <tr>
                            <td>{ind.name}</td>
                            <td>{ind.age}</td>
                            <td>{ind.gender}</td>
                            <td>{bus['fare']}</td>
                        </tr>
                    ))
                }
            </table>
            <div>
                <span>
                    Tax: Rs. 0
                </span>
                <span>
                    Total Fare: Rs. {bus['fare'] * pass.length}
                </span>
            </div>
            <div>
                <span>
                    <button onClick={passengerButtonHandler}>Return to Passenger Page</button>
                </span>
                <span>
                    <StripeCheckOut
                        stripeKey={publishableKey}
                        lable="Proceed to Pay"
                        name="Pay with Credit Card"
                        billingAddress
                        shippingAddress
                        amount={bus['fare'] * pass.length * 100}
                        description={`Total fare is Rs.${bus['fare'] * pass.length}`}
                        token={payNow}
                    />
                </span>
            </div>
            <Footer/>
        </div>
    );
};

export default PassengerDetails;