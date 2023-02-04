import React from "react";

import SearchBar from "../Shared/SearchBar";
import Header1 from "../Components/Header/Header1";
import Footer from "../Components/Footer/Footer";

const Home = () => {
    return <>
        <Header1/>
            <div className="sbar">
                <SearchBar/>
            </div>
        <Footer/>
    </>
};

export default Home;