import React,{useRef} from "react";
import './Search-bar.css'
import {Col, Form, FormGroup} from "reactstrap";

const SearchBar = () => {

    const FromRef = useRef('')
    const ToRef = useRef('')
    const OnRef = useRef('')

    const searchHandler = ()=>{

        const from = FromRef.current.value
        const to = ToRef.current.value
        const on = OnRef.current.value

        if(from === '' || to === '' || on ===''){
            return alert("All Fields are required")
        }
    }

    return <Col lg='12'>
        <div className="search__bar">
            <Form>
                <FormGroup>
                    <span><i class="ri-map-pin-2-line"></i></span>
                    <div>
                        <h6>From</h6>
                        <input type="text" placeholder="From" ref={FromRef}/>
                    </div>
                </FormGroup>
                <FormGroup>
                    <span><i class="ri-map-pin-2-line"></i></span>
                    <div>
                        <h6>To</h6>
                        <input type="text" placeholder="To" ref={ToRef}/>
                    </div>
                </FormGroup>
                <FormGroup>
                    <span><i class="ri-calendar-line"></i></span>
                    <div>
                        <h6>On</h6>
                        <input type="datetime-local" placeholder="On" ref={OnRef}/>
                    </div>
                </FormGroup>
                <span className="search__icon" type="submit" onClick={searchHandler}>
                    <i class="ri-search-line"></i>
                </span>
            </Form>
        </div>
    </Col>
};

export default SearchBar;