import React from "react";
import { useNavigate } from "react-router-dom";

import Header1 from "./../../Components/Header/Header1";
import Footer from "../../Components/Footer/Footer";

const Ticket = () => {
    const navigate = useNavigate();

    const bookingsButtonHandler = () =>{
        navigate( "/bookings" )
    }

    return (<div>
        <Header1/>
            <div>
                <div>
                    Ticket Number: 1
                </div>
                <div>
                    From: Coimbatore 1200hrs
                </div>
                <div>
                    To: Chennai 2300hrs
                </div>
                <div>
                    Contact Details:
                </div>
                <div>
                    <span>
                        Phone: 9876543210
                    </span>
                    <span>
                        Email: abc@cde.com
                    </span>
                </div>
            </div>
            <table border = "1">
                <tr>
                    <td>Passenger Name</td>
                    <td>Age</td>
                    <td>Gender</td>
                    <td>Fare</td>
                    <td>Cancel</td>
                </tr>
         
                <tr>
                    <td>Ahesh</td>
                    <td>22</td>
                    <td>Male</td>
                    <td>Rs.13</td>
                    <td>
                        <button>Cancel</button>
                    </td>
                </tr>

                <tr>
                    <td>Kallaam</td>
                    <td>22</td>
                    <td>Male</td>
                    <td>Rs.10</td>
                    <td>
                        <button>Cancel</button>
                    </td>
                </tr>
            </table>
            <div>
                <span>
                    Tax: Rs. 0
                </span>
                <span>
                    Total Fare: Rs. 23
                </span>
            </div>
            <div>
                <span>
                    <button onClick={bookingsButtonHandler}>Return to Bookings Page</button>
                </span>
                <span>
                    <button>Cancel Ticket</button>
                </span>
                <span>
                    <button>Print Ticket</button>
                </span>
            </div>
        <Footer/>
    </div>);
};

export default Ticket;