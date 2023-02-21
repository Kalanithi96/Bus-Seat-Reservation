import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header1 from "../../Components/Header/Header1";
import Footer from "../../Components/Footer/Footer";
import useFetch from "../../Hooks/useFetch";
import {BASE_URL} from "../../Hooks/config";

const Bookings = () => {
    const navigate = useNavigate();

    const id = useParams();
    
    const {data: TableData, loading, error} = useFetch(`${BASE_URL}/booking/user/${id.id}`)
    
        if(!loading){
            
            const ticketButtonHandler = (e,id) =>{
                navigate( `/bookings/ticket/${id}` )
            }

            let x=1;
            
            if(TableData.length==0){
                return(
                    <div>
                        <Header1/>
                        <h3>No Booking Done</h3>
                        <Footer/>
                    </div>
                );
            }
            else{
                return (
                    <div>
                        <Header1/>
                                <div>
                                    <table border="1">
                                        <tr>
                                            <td>Ticket Number</td>
                                            <td>From</td>
                                            <td>To</td>
                                            <td>Number of Passengers</td>
                                            <td>Fare</td>
                                            <td>View Details</td>
                                        </tr>
                                        {
                                            TableData.map( (rec)=>{
                                                return(
                                                <tr>
                                                    <td>{x++}</td>
                                                    <td>
                                                        <div>
                                                            {rec.bus_details[0].from}
                                                        </div>
                                                        <div>
                                                            {rec.bus_details[0].departure}
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            {rec.bus_details[0].to}
                                                        </div>
                                                        <div>
                                                            {rec.bus_details[0].arrival}
                                                        </div>
                                                    </td>
                                                    <td>{rec.count}</td>
                                                    <td>{rec.bus_details[0].fare * rec.count}</td>
                                                    <td><button onClick={(e)=>ticketButtonHandler(e,rec._id)}>View Details</button></td>
                                                </tr>)
                                            } )
                                        }
                                    </table>
                                </div>
                        <Footer/>
                    </div>
                );
            }
        }
        else{
            return(
                <div>
                    <Header1/>
                    <h3>Loading...</h3>
                    <Footer/>
                </div>
            )
        }
};

export default Bookings;