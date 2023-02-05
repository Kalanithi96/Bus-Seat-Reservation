import React from "react";
import { useNavigate } from "react-router-dom";
import Header1 from "../../Components/Header/Header1";
import Footer from "../../Components/Footer/Footer";

const Bookings = () => {
    const navigate = useNavigate();

    const ticketButtonHandler = () =>{
        navigate( "/bookings/ticket" )
    }
    
    return (
        <div>
            <Header1/>
            <div>
                <table border="1">
                    <tr>
                        <td>Ticket Number</td>
                        <td>From</td>
                        <td>To</td>
                        <td>Contact Details</td>
                        <td>Number of Passengers</td>
                        <td>Fare</td>
                        <td>View Details</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>
                            <div>
                                Coimbatore
                            </div>
                            <div>
                                1200hrs
                            </div>
                        </td>
                        <td>
                            <div>
                                Chennai
                            </div>
                            <div>
                                2300hrs
                            </div>
                        </td>
                        <td>
                            <div>
                                9876543210
                            </div>
                            <div>
                                abc@cd.com
                            </div>
                        </td>
                        <td>2</td>
                        <td>23.00</td>
                        <td><button onClick={ticketButtonHandler}>View Details</button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>
                            <div>
                                Coimbatore
                            </div>
                            <div>
                                1200hrs
                            </div>
                        </td>
                        <td>
                            <div>
                                Chennai
                            </div>
                            <div>
                                2300hrs
                            </div>
                        </td>
                        <td>
                            <div>
                                9876543210
                            </div>
                            <div>
                                abc@cd.com
                            </div>
                        </td>
                        <td>2</td>
                        <td>23.00</td>
                        <td><button onClick={ticketButtonHandler}>View Details</button></td>
                    </tr>
                </table>
            </div>
            <Footer/>
        </div>
    );
};

export default Bookings;