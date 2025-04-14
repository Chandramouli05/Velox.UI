import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import atheleotech from "../../img/Asset-1.svg";

export default function About(){
     const navigate = useNavigate();
   return(
    <div className="about container-fluid">

        <div className="container-fluid my-5">
              <div className="row my-5 justify-content-center">
                <div className="col-12 d-flex justify-content-center py-3">
                  <h2 className="mt-2 title-header">Welcome to Velox Athelotech</h2>
                </div>
              </div>
            
              <div className="row my-3">
                {/* Left Column (Text Content) */}
                <div className="col-12 col-md-6 d-flex justify-content-center">
                  <div className="d-flex flex-column w-75 align-items-start gap-2">
                    <h3 className="sub-header">Empowering Young Athletes to Reach New Heights</h3>
                    <h5>Join Us and Shape the Future</h5>
                    <p className="text-start">
                      At Velox athelotech, we believe that every athlete deserves the opportunity to showcase their talent and pursue their passion. That's why we provide a platform for schools, clubs, and academies to compete at the district and state levels, across all age categories.
                    </p>
                  
                  </div>
                </div>
            
                {/* Right Column (Image) */}
                <div className="col-12 col-md-6 d-flex justify-content-center mt-4 mt-md-0">
                  <div className="VisionCards">
                    <img src={atheleotech} alt="map image" className="img-fluid" id="vision" />
                  </div>
                </div>
              </div>
        </div>
        <div className="container-fluid my-5">
              <div className="row my-5 justify-content-center">
                <div className="col-12 d-flex justify-content-center py-3">
                  <h2 className="mt-2 title-header">Our Mission</h2>
                </div>
              </div>
            
              <div className="row my-3">
                {/* Left Column (Text Content) */}
                <div className="col-12 col-md-8 d-flex justify-content-center">
                  <div className="d-flex flex-column w-100 align-items-center">
                    <p className="text-start">
                    To foster a supportive ecosystem that nurtures young athletes, providing them with the resources and guidance they need to excel in their chosen sport.
                    </p>
                  
                  </div>
                </div>
            
              
              </div>
        </div>

        <div className="container-fluid my-5">
              <div className="row my-5 justify-content-center">
                <div className="col-12 d-flex justify-content-center py-3">
                  <h2 className="mt-2 title-header">Our Services</h2>
                </div>
              </div>
            
              <div className="row my-3">
                {/* Left Column (Text Content) */}
                <div className="col-12 col-md-6 d-flex justify-content-center">
                  <div className="d-flex flex-column w-75 align-items-start gap-2">
                   
                   <ul>
                     <li> <p className="text-start">
                     Dedicated resources for athletes, including analysts, coaches, and specialists with vast experience.
                    </p></li>
                    <li> <p className="text-start">
                    Opportunities for athletes to interact with renowned personalities in their respective sports.
                    </p></li>
                    <li> <p className="text-start">
                    A sports panel featuring inspirational stories from celebrated athletes.
                    </p></li>
                   </ul>
                    
                  
                  </div>
                </div>
            
              
              </div>
        </div>

        <div className="container-fluid my-5">
              <div className="row my-5 justify-content-center">
                <div className="col-12 d-flex justify-content-center py-3">
                  <h2 className="mt-2 title-header">Our Vision</h2>
                </div>
              </div>
            
              <div className="row my-3">
                {/* Left Column (Text Content) */}
                <div className="col-12 col-md-8 d-flex justify-content-center">
                  <div className="d-flex flex-column w-100 align-items-center">
                    <p className="text-start">
                    To create a holistic sports development program that empowers young athletes to achieve their full potential and become champions in their own right.                    </p>
                  
                  </div>
                </div>
            
              
              </div>
        </div>

                  <div className="container-fluid my-5">
          <div className="row my-5 justify-content-center">
            <div className="col-12 d-flex justify-content-center py-3">
              <h2 className="mt-2 title-header">Join our community</h2>
            </div>
          </div>
        
          <div className="row my-3">
            {/* Left Column (Text Content) */}
            <div className="col-12 col-md-6 d-flex justify-content-center">
              <div className="d-flex flex-column w-75 align-items-start gap-2">
               
                <p className="text-start">
                Register your school, club, or academy today and give your athletes the opportunity to shine.</p>
                <button className="btn btnBgt w-25" onClick={() => navigate("/signup")}>Register now</button>
              </div>
            </div>
        
            {/* Right Column (Image) */}
            <div className="col-12 col-md-6 d-flex justify-content-center mt-4 mt-md-0">
              <div className="VisionCards">
                <img src={atheleotech} alt="map image" className="img-fluid" id="vision" />
              </div>
            </div>
          </div>
        </div>
        
    </div>
   )
};