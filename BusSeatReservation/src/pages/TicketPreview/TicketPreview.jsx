import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
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

    const {data: bus, loading, error} = useFetch(`${BASE_URL}/buses/${head.id}`)

    let pass = location.state.pass;
    let contact = location.state.contact;
    let fill = location.state.fill;

    const passengerButtonHandler = () =>{
        navigate( `/passenger/${head.id}`, {state:fill} )
    }

    const publishableKey="pk_test_51MdY41SHtFjqIyhtA6iF4VzoJWeLAP1KTNx68m5XYah4owP7jmsXHFJjfn8GD8AItPXFnxku0IHKf9MJIEvj9NjW00qZIXuHUn";

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
                console.log("Your payment was successful");
                
                navigate('/customerHome')
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