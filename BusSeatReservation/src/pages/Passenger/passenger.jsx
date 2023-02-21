import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import Header1 from "../../Components/Header/Header1";
import Footer from "../../Components/Footer/Footer";
import "./passenger.css";

const Passenger = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const head = useParams();

    //const {data: bus, loading, error} = useFetch(`${BASE_URL}/buses/${head.id}`)

    const fill = location.state
    let x = 1;

    
    const [pass,setPass] = useState([])

    const [contact,setContact] = useState({
        phone:undefined,
        email:undefined
    })

    const previewButtonHandler = () =>{
        navigate( `/ticketPreview/${head.id}`, {state:{pass:pass, contact:contact, fill:fill}} )
    }

    const formHandler = ()=>{
        let Fields = []
        for(let i=0;i<fill.length;i++){
            let newField = {seatNumber:fill[i] ,name:'', age:undefined, gender:''};
            Fields.push(newField);
        }
        setPass(Fields);
        console.log(pass);
    }

    const handleFormChange = (index,event) =>{
        let data = [...pass];
        data[index][event.target.name] = event.target.value;
        setPass(data);
    }

    const handleContactChange = (event) =>{
        let data = contact;
        data[event.target.name] = event.target.value;
        setContact(data);
    }

    const busButtonHandler = () =>{
        navigate( `/bus/${head.id}` )
    }

    return (
        <div>
            <Header1/>
                <button onClick={formHandler}>Prepare form</button>
                <div className="big_container">
                    <form>
                        <div className="passenger_container">{
                                pass.map((input,index)=>(
                                    <div className="ind_pass" key={index}>
                                        <div className="ind_pas_upper">
                                            <div>
                                                Passenger {x++} : Seat {input.seatNumber}
                                            </div>
                                            <div>
                                                Name
                                            </div>
                                            <div>
                                                <input 
                                                    type="text"
                                                    name="name"
                                                    required 
                                                    placeholder="Name" 
                                                    value={input.name}
                                                    onChange={event => handleFormChange(index, event)}
                                                />
                                            </div>
                                        </div>
                                        <div className="ind_pas_lower">
                                            <div>
                                                <div>
                                                    Age
                                                </div>
                                                <div>
                                                    <input 
                                                        type="number" 
                                                        name="age"
                                                        required 
                                                        placeholder="Age" 
                                                        value={input.age}
                                                        onChange={event => handleFormChange(index, event)}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    Gender
                                                </div>
                                                <div>
                                                    <select 
                                                        required
                                                        name="gender"
                                                        onChange={event => handleFormChange(index, event)}
                                                    >
                                                        <option value="">Choose a Gender</option>
                                                        <option value="M">Male</option>
                                                        <option value="F">Female</option>
                                                        <option value="T">Transgender</option>
                                                        <option value="O">Other</option>
                                                    </select>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                        <div className="contact_container">
                            <div>
                                <div>
                                    Phone Number
                                </div>
                                <div>
                                    <input 
                                        type="number" 
                                        name="phone"
                                        required 
                                        placeholder="Phone Number"
                                        value={contact.phone}
                                        onChange={handleContactChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <div>
                                    Email Id
                                </div>
                                <div>
                                    <input 
                                        type="email" 
                                        name="email"
                                        required 
                                        placeholder="abc@mail.com"
                                        value={contact.email}
                                        onChange={handleContactChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <button onClick={busButtonHandler}>Return to Seats page</button>
                            </div>
                            <div>
                                <button onClick={previewButtonHandler}>Preview</button>
                            </div>
                        </div>
                    </form>
                </div>
            <Footer/>
        </div>
    );
};

export default Passenger;
