import React,{useRef} from "react";
import { useNavigate } from "react-router-dom";
import './Search-bar.css'


const SearchBar = () => {

    const FromRef = useRef('')
    const ToRef = useRef('')
    const OnRef = useRef('')

    const navigate = useNavigate();

    const searchHandler = async()=>{

        const from = FromRef.current.value
        const to = ToRef.current.value
        const on = OnRef.current.value

        if(from === '' || to === '' || on ===''){
            return alert("All fields are required");
        }

        const res = await fetch(`http://localhost:4000/api/v1/buses/search/getBusBySearch?from=${from}&to=${to}&on=${on}`,{method:"GET"})
 
        if(!res.ok)
            alert("Something went wrong");

        const result = await res.json();

        navigate( `/bus/search?from=${from}&to=${to}&on=${on}`, {state:result.data})
    }

    return (
        <div className="search__bar">
                <div>
                    <span className="label-container">
                        <i className="ri-map-pin-2-line"></i>
                        <h6 className="label">From</h6>
                    </span>
                    <div>
                        <input className = "search-bar-input" type="text" placeholder="From" ref={FromRef}/>
                    </div>
                </div>
                <div >
                    <span className="label-container">
                        <i className="ri-map-pin-2-line"></i>
                        <h6 className="label">To</h6>
                    </span>
                    <div>
                        <input className = "search-bar-input" type="text" placeholder="To" ref={ToRef}/>
                    </div>
                </div>
                <div >
                    <span className="label-container">
                        <i className="ri-calendar-line"></i>
                        <h6 className="label">On</h6>
                    </span>
                    <div>
                        <input className = "search-bar-input" type="date" placeholder="On" ref={OnRef}/>
                    </div>
                </div>
                <span className="search__icon" type="submit" onClick={searchHandler}>
                    <i className="ri-search-line"></i>
                </span>
        </div>
    );
        
            
};

export default SearchBar;