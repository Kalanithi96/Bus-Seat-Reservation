import React from "react";
import Header1 from "../Components/Header/Header1";
import Footer from "../Components/Footer/Footer";
import "./bus/bus.css";

const Bus = () => {
  return (
    <div>
      <Header1 />
      <div className="big_container">
        <div className="bus_container"></div>
        <div className="passenger_container">
          <div className="ind_pass">
            <div className="ind_pas_upper">
              <div>Passenger 1</div>
              <div>Name</div>
              <div>
                <input type="text" placeholder="Name" />
              </div>
            </div>
            <div className="ind_pas_lower">
              <div>
                <div>Age</div>
                <div>
                  <input type="number" placeholder="Age" />
                </div>
              </div>
              <div>
                <div>Gender</div>
                <div>
                  <input type="text" placeholder="Gender" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact_container">
          <div>
            <div>Phone Number</div>
            <div>
              <input type="number" placeholder="Phone Number" />
            </div>
          </div>
          <div>
            <div>Email Id</div>
            <div>
              <input type="email" placeholder="abc@mail.com" />
            </div>
          </div>
          <div>
            <button type="submit">Preview</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Bus;
