import React from "react";
import { useNavigate } from "react-router-dom";
import Header1 from "../../Components/Header/Header1";
import Footer from "../../Components/Footer/Footer";

const PassengerDetails = () => {
    const navigate = useNavigate();

    const busButtonHandler = () =>{
        navigate( "/bus" )
    }
    return (
        <div>
            <Header1/>
            <div>
                <div>
                    Ticket Preview  
                </div>
                <div>
                    <span>
                        From: Coimbatore 1200hrs
                    </span>
                    <span>
                        To: Chennai 2300hrs
                    </span>
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
                </tr>
         
                <tr>
                    <td>Ahesh</td>
                    <td>22</td>
                    <td>Male</td>
                    <td>Rs.13</td>
                </tr>

                <tr>
                    <td>Kallaam</td>
                    <td>22</td>
                    <td>Male</td>
                    <td>Rs.10</td>
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
                    <button onClick={busButtonHandler}>Return to Seats Page</button>
                </span>
                <span>
                    <button>Proceed to Pay</button>
                </span>
            </div>
            <Footer/>
        </div>
    );
};

export default PassengerDetails;