import React from "react";
import './Search-bar.css'
import {Col, Form, FormGroup} from "reactstrap";

const SearchBar = () => {
    return <Col lg='12'>
        <div className="search__bar">
            <Form>
                <FormGroup>
                    <span><i class="ri-map-pin-line"></i></span>
                    <div>
                        <h6>From</h6>
                        <input type="text" placeholder="From"/>
                    </div>
                </FormGroup>
                <FormGroup>
                    <span><i class="ri-map-pin-line"></i></span>
                    <div>
                        <h6>To</h6>
                        <input type="text" placeholder="To"/>
                    </div>
                </FormGroup>
                <FormGroup>
                    <span><i class="ri-calendar-line"></i></span>
                    <div>
                        <h6>On</h6>
                        <input type="datetime-local" placeholder="On"/>
                    </div>
                </FormGroup>
            </Form>
        </div>
    </Col>
};

export default SearchBar;