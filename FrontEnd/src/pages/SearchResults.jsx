import React from "react";
import { useNavigate } from "react-router-dom";

import Header1 from "../Components/Header/Header1";
import Footer from "../Components/Footer/Footer";
import "./SearchResults/SearchResults.css";

const SearchResults = () => {
    
    const navigate = useNavigate();

    const busButtonHandler = () =>{
        navigate( "/bus" )
    }

    return (
        <div>
            <Header1/>
    
            <div className="title__bar_container">
                <div className="title__bar">
                    <span>
                        Bus Number
                    </span>
                    <span>
                        From
                    </span>
                    <span>
                        To
                    </span>
                    <span>
                        Available Seats
                    </span>
                    <span>
                        Book
                    </span>
                </div>
            </div>

            <div className="row_container">
                <div className="row_bar">
                    <span>
                        TN37DB5140
                    </span>
                    <span>
                        <div>Coimbatore</div>
                        <div>21-10-2012 1200hrs</div>
                    </span>
                    <span>
                        <div>Chennai</div>
                        <div>21-10-2012 2300hrs</div>
                    </span>
                    <span>
                        2
                    </span>
                    <span>
                        <button type="submit" onClick={busButtonHandler}>
                            <i className="ri-book-line"></i>
                        </button>
                    </span>
                </div>
            </div>

            <div className="row_container">
                <div className="row_bar">
                    <span>
                        TN37DB5140
                    </span>
                    <span>
                        <div>Coimbatore</div>
                        <div>21-10-2012 1200hrs</div>
                    </span>
                    <span>
                        <div>Chennai</div>
                        <div>21-10-2012 2300hrs</div>
                    </span>
                    <span>
                        2
                    </span>
                    <span>
                        <button type="submit" onClick={busButtonHandler}>
                            <i className="ri-book-line"></i>
                        </button>
                    </span>
                </div>
            </div>

            <div className="row_container">
                <div className="row_bar">
                    <span>
                        TN37DB5140
                    </span>
                    <span>
                        <div>Coimbatore</div>
                        <div>21-10-2012 1200hrs</div>
                    </span>
                    <span>
                        <div>Chennai</div>
                        <div>21-10-2012 2300hrs</div>
                    </span>
                    <span>
                        2
                    </span>
                    <span>
                        <button type="submit" onClick={busButtonHandler}>
                            <i className="ri-book-line"></i>
                        </button>
                    </span>
                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default SearchResults;