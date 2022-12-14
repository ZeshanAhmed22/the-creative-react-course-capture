import React from "react";
//Import Icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

const ServiceSection = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>
          High <span>quality</span> services
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon"></div>
            <img src={clock} />
            <h3>Efficient</h3>
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="cards">
          <div className="card">
            <div className="icon"></div>
            <img src={teamwork} />
            <h3>Teamwork</h3>
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="cards">
          <div className="card">
            <div className="icon"></div>
            <img src={diaphragm} />
            <h3>Diaphragm</h3>
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="cards">
          <div className="card">
            <div className="icon"></div>
            <img src={money} />
            <h3>Affordable</h3>
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className="image">
        <img src={home2} alt="home2" />
      </div>
    </div>
  );
};

export default ServiceSection;
