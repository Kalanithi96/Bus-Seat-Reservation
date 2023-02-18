import React from "react";
import Header1 from "../../Components/Header/Header1";
import DynamicTable from "./DynamicTable";
import Footer from "../../Components/Footer/Footer";
import "./SearchResults.css";


const SearchResults = () => {

    return (
        <div>
            <Header1/>
            <DynamicTable/>
            <Footer/>
        </div>
    );
};

export default SearchResults;