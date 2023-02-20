import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import useFetch from "../../Hooks/useFetch";
import { BASE_URL } from "../../Hooks/config";
import Header1 from "../../Components/Header/Header1";
import Footer from "../../Components/Footer/Footer";
import "./bus.css";

class CustomSelect{
    constructor(originalSelect){
        this.originalSelect = originalSelect;
        this.customSelect = document.createElement('div')
        this.customSelect.classList.add('bus')

        this.originalSelect.querySelectorAll("option").forEach(optionElement => {
            const itemElement = document.createElement("div");

            itemElement.classList.add("select__item");
            itemElement.textContent = optionElement.textContent;
            this.customSelect.appendChild(itemElement);

            if(optionElement.selected){
                this._select(itemElement);
            }

            itemElement.addEventListener("click", ()=>{
                if(itemElement.classList.contains("select__item--selected")){
                    this._deselect(itemElement);
                }
                else{
                    this._select(itemElement);
                }
            })
        })

        this.originalSelect.insertAdjacentElement("afterend", this.customSelect);
        this.originalSelect.style.display = "none";
    }

    _select(itemElement){
        const index = Array.from(this.customSelect.children).indexOf(itemElement);

        this.originalSelect.querySelectorAll("option")[index].selected = true;
        itemElement.classList.add("select__item--selected");
    }

    _deselect(itemElement){
        const index = Array.from(this.customSelect.children).indexOf(itemElement);

        this.originalSelect.querySelectorAll("option")[index].selected = false;
        itemElement.classList.remove("select__item--selected");

    }
}

const Bus = () => {
    const navigate = useNavigate();

    const head = useParams();

    const {data: bus, loading, error} = useFetch(`${BASE_URL}/buses/${head.id}`)

    const [fill, setFill] = useState([]);

    const availableButtonHandler = () =>{
        document.querySelectorAll('.select__item').forEach(element=>{
            if(!bus['vacant'][element.id]){
                element.classList.add("cannot_select")
            }
        })
    }
    
    const passengerButtonHandler = () =>{
        document.querySelectorAll('.select__item').forEach(element=>{
            if(element.classList.contains("select__item--selected")){
                fill.push(element.id)
            }
        })
        if(fill.length == 0)
            alert("No seat selected");
        else
            navigate(`/passenger/${head.id}`, {state: fill})
    }

    function seatHandler(event, index){
        const element = document.getElementById(index);
        if(bus['vacant'][index]){
            if(!element.classList.contains("select__item--selected"))
                element.classList.add("select__item--selected");
            else
                element.classList.remove("select__item--selected");
        }
    }

    if(loading)
        return(
            <div>
                <Header1/>
                <h3>Loading...</h3>
                <Footer/>
            </div>
        )
    return (
        <div>
            <Header1/>
                <div className="bus">
                    <div className="select__item" id='A1' onClick={(e)=>seatHandler(e,'A1')}>A1</div>
                    <div className="select__item" id='A2' onClick={(e)=>seatHandler(e,'A2')}>A2</div>
                    <div className="select__item" id='A3' onClick={(e)=>seatHandler(e,'A3')}>A3</div>
                    <div className="select__item" id='B1' onClick={(e)=>seatHandler(e,'B1')}>B1</div>
                    <div className="select__item" id='B2' onClick={(e)=>seatHandler(e,'B2')}>B2</div>                            <div className="select__item" id='B3' onClick={(e)=>seatHandler(e,'B3')}>B3</div>
                    <div className="select__item" id='C1' onClick={(e)=>seatHandler(e,'C1')}>C1</div>
                    <div className="select__item" id='C2' onClick={(e)=>seatHandler(e,'C2')}>C2</div>
                    <div className="select__item" id='C3' onClick={(e)=>seatHandler(e,'C3')}>C3</div>
                    <div className="select__item" id='D1' onClick={(e)=>seatHandler(e,'D1')}>D1</div>
                    <div className="select__item" id='D2' onClick={(e)=>seatHandler(e,'D2')}>D2</div>
                    <div className="select__item" id='D3' onClick={(e)=>seatHandler(e,'D3')}>D3</div>
                    <div className="select__item" id='E1' onClick={(e)=>seatHandler(e,'E1')}>E1</div>
                    <div className="select__item" id='E2' onClick={(e)=>seatHandler(e,'E2')}>E2</div>
                    <div className="select__item" id='E3' onClick={(e)=>seatHandler(e,'E3')}>E3</div>
                    <div className="select__item" id='F1' onClick={(e)=>seatHandler(e,'F1')}>F1</div>
                    <div className="select__item" id='F2' onClick={(e)=>seatHandler(e,'F2')}>F2</div>
                    <div className="select__item" id='F3' onClick={(e)=>seatHandler(e,'F3')}>F3</div>
                    <div className="select__item" id='G1' onClick={(e)=>seatHandler(e,'G1')}>G1</div>
                    <div className="select__item" id='G2' onClick={(e)=>seatHandler(e,'G2')}>G2</div>
                    <div className="select__item" id='G3' onClick={(e)=>seatHandler(e,'G3')}>G3</div>
                </div>
                <button onClick={availableButtonHandler}>
                    Show Available Seats
                </button>
                <button onClick={passengerButtonHandler}>
                    Proceed to enter Passenger Details
                </button>
            <Footer/>
        </div>
    );
};

export default Bus;