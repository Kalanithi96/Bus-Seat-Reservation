import React from "react";
import Header2 from "../../Components/Header/Header2";
import Footer from "../../Components/Footer/Footer";


const AdminBus = () => {
    
    return (
        <div>
            <Header2/>
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
                        <div>
                            <button>Reset All</button>
                        </div>
                    </div>
                    <div className="passenger_container">
                        <div>
                            Passenger 1
                        </div>
                        <div>
                            <span>Name</span>
                            <span>Kalanithi</span>
                        </div>    
                        <div>
                            <span>Age</span>
                            <span>23</span>
                        </div>
                        <div>
                            <span>Gender</span>
                            <span>Male</span>
                        </div>    
                    </div>

                    <div className="contact_container">
                        <div>
                            <span>
                                Phone Number
                            </span>
                            <span>
                                9786352410
                            </span>
                        </div>
                        <div>
                            <span>
                                Email Id
                            </span>
                            <span>
                                qwerty@bca.com
                            </span>
                        </div>
                        <div>
                            <button>Reset</button>
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    );
};

export default AdminBus;