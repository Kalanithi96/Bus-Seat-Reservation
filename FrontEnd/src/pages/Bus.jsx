import React from "react";
import { useNavigate } from "react-router-dom";
import Header1 from "../Components/Header/Header1";
import Footer from "../Components/Footer/Footer";
import "./bus/bus.css";

const Bus = () => {
    const navigate = useNavigate();

    const previewButtonHandler = () =>{
        navigate( "/passengerDetails" )
    }

    return (
        <div>
            <Header1/>
                <div className="big_container">
                    <div className="bus_container">
                        <div className="bus">
                            <div className="left">
                                <div>
                                    <button>-</button>
                                </div>
                                <div>
                                    <button>A1</button>
                                </div>
                                <div>
                                    <button>B1</button>
                                </div>
                                <div>
                                    <button>C1</button>
                                </div>
                                <div>
                                    <button>D1</button>
                                </div>
                                <div>
                                    <button>E1</button>
                                </div>
                                <div>
                                    <button>F1</button>
                                </div>
                                <div>
                                    <button>G1</button>
                                </div>
                            </div>
                            <div className="right">
                                <div>
                                    <span>
                                        <button>--</button>
                                    </span>
                                    <span>
                                        <button>--</button>
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <button>A2</button>
                                    </span>
                                    <span>
                                        <button>A3</button>
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <button>B2</button>
                                    </span>
                                    <span>
                                        <button>B3</button>
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <button>C2</button>
                                    </span>
                                    <span>
                                        <button>C3</button>
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <button>D2</button>
                                    </span>
                                    <span>
                                        <button>D3</button>
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <button>E2</button>
                                    </span>
                                    <span>
                                        <button>E3</button>
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <button>F2</button>
                                    </span>
                                    <span>
                                        <button>F3</button>
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <button>G2</button>
                                    </span>
                                    <span>
                                        <button>G3</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="passenger_container">
                        <div className="ind_pass">
                            <div className="ind_pas_upper">
                                <div>
                                    Passenger 1
                                </div>
                                <div>
                                    Name
                                </div>
                                <div>
                                    <input type="text" placeholder="Name"/>
                                </div>
                            </div>
                            <div className="ind_pas_lower">
                                <div>
                                    <div>
                                        Age
                                    </div>
                                    <div>
                                        <input type="number" placeholder="Age"/>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        Gender
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Gender"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="ind_pass">
                            <div className="ind_pas_upper">
                                <div>
                                    Passenger 2
                                </div>
                                <div>
                                    Name
                                </div>
                                <div>
                                    <input type="text" placeholder="Name"/>
                                </div>
                            </div>
                            <div className="ind_pas_lower">
                                <div>
                                    <div>
                                        Age
                                    </div>
                                    <div>
                                        <input type="number" placeholder="Age"/>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        Gender
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Gender"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="contact_container">
                        <div>
                            <div>
                                Phone Number
                            </div>
                            <div>
                                <input type="number" placeholder="Phone Number"/>
                            </div>
                        </div>
                        <div>
                            <div>
                                Email Id
                            </div>
                            <div>
                                <input type="email" placeholder="abc@mail.com"/>
                            </div>
                        </div>
                        <div>
                            <button type="submit" onClick={previewButtonHandler}>Preview</button>
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    );
};

export default Bus;