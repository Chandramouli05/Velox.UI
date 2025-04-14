import React, { useRef, } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles.css";
import mainLogo from "../../img/velox-new-logo.png";
import Carousel1 from "../../img/carouselA.svg";
import Carousel2 from "../../img/carouselB.svg";
import Carousel3 from "../../img/CarouselC.svg";
import institution from "../../img/institution.svg";
import coach from "../../img/coach.svg";
import athelete from "../../img/surfing.svg";
import school from "../../img/school.svg";
import university from "../../img/university.svg";
import sports from "../../img/sports.svg";
import cosco from "../../img/cosco.svg";
import panelists from "../../img/panelists.png";
import tournament from "../../img/Tournament.svg";
import footerlogo from "../../img/footer-logo.svg";
import pro1 from "../../img/pro1.svg";
import pro2 from "../../img/pro2.svg";
import pro3 from "../../img/pro3.svg";
import pro4 from "../../img/pro4.svg";
import pro5 from "../../img/pro5.svg";
import pro6 from "../../img/pro6.svg";
import button from "../../img/button.svg";
import greybg from  "../../img/grey-bg.svg";
import map from "../../img/map.png";
import headoffice from "../../img/map3.png";
import faq from "../../img/FAQ.png";
import data from "./data";
import dropdown from "../../img/dropdown.svg";
import viewMore from "../../img/viewMore.png"
import atheleotech from "../../img/Asset-1.svg";



export default function LandingPage() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);


  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };



  
  function handleSingleSelection(getCurrentId) {

      setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
      
      let cpyMultiple = [...multiple];
      const findIndexOfCurrent = cpyMultiple.indexOf(getCurrentId);

      console.log(findIndexOfCurrent);
      if(findIndexOfCurrent === -1 ) cpyMultiple.push(getCurrentId)
          else cpyMultiple.splice(getCurrentId, 1);

      setMultiple(cpyMultiple);
  }

  return (
    <div className="body-content">
      <div className="container-fluid">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light fixed-top px-4 d-flex justify-content-between">
          <a className="navbar-brand" href="#">
            <img src={mainLogo} alt="Velox Logo" height="72" />
          </a>
          <div className="ml-auto">
            <button className="btn btnBgt btn-md" onClick={() => navigate("/login")}>Sign In</button>
          </div>
        </nav>

        {/* Carousel Section */}
        <div className="row">
          <div className="col p-0">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
              <div className="carousel-indicators carobtn">
                <div className="joinnow-button mb-5">
                  <button className="btn btnBg btn-lg" onClick={() => navigate("/signup")}>Join Now</button>
                </div>
                <div className="slider-button">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
                </div>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100 img-fluid" src={Carousel1} alt="First slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100 img-fluid" src={Carousel2} alt="Second slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100 img-fluid" src={Carousel3} alt="Third slide" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          {/* Vision Section */}
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
        <button className="btn btnBgt w-25" onClick={() => navigate("/aboutus")}>Explore us</button>
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
      

      {/* Tournament Schedule Section */}
      <div className="container-fluid p-0">
        <div className="bgEvent">
          
          <div className="row d-flex flex-row py-3 mx-5">

          <div className="col-12 col-md-7">
              <h2 className="title-header text-center text-md-start d-flex justify-content-end align-items-center justify-content-md-end mx-2 py-3 ">Upcoming Events</h2>
            </div>

          <div className="col-12 col-md-5 d-flex justify-content-end justify-content-md-end" >
              <a className="fs-4" id="viewMore"><img src={viewMore} height={84} data-toggle="tooltip" data-placement="top" title="View more" /></a>
            </div>
          </div>

          {/* Scrollable Card Section */}
          <div className="col cardContainer">
            {/* Scroll Buttons */}
            <div className="scroll-buttons">
              <button className="scroll-left" onClick={scrollLeft}><span><i class="bi bi-caret-left-fill"></i></span></button>
              <button className="scroll-right" onClick={scrollRight}><span><i class="bi bi-caret-right-fill"></i></span></button>
            </div>

            {/* Card Container */}
            <div className="card-container" ref={containerRef}>
              {[1, 2, 3, 4, 5, 6, 7, 8,9,10].map((match, index) => (
                <div key={index} className={`card ${index % 2 === 0 ? 'bg-light' : 'bgOrange'}`}>
                 {/* <div className="skew-card">
                 <img src={greybg} alt="Velox Logo"  className="img-fluid" />
                  </div>  */}
                  <div className={index % 2 === 0 ? 'w-100 p-4 card-content text-black' : 'w-100 p-4 card-content-og text-white'}>
                    <div className="cardHeader">
                    <h4 className={index % 2 === 0 ? 'text-black' : 'text-white'}>Match {match}</h4>
                     <div className="date-badge m-1">
                       <h2 className="m-1">28</h2>
                       <p className="m-1">Mar 2025</p>
                     </div>
                     </div>

                    <p className={index % 2 === 0 ? 'text-black' : 'text-white'}>Lorem Ipsum is simply dummy text.</p>
                    <a href="#" className={`btn btn-white details-link ${index % 2 === 0 ? 'lightBtn' : 'btn btn-light border-none'}`}>Read more</a>
                    </div>
                  
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Attainment Section */}
        <div className="container-fluid p-0 my-5">
          <div className="col-md-12 col-sm-4 col-12 py-5">
            <div className="row justify-content-center">
              <div className="col d-flex justify-content-center">
                <h2 className="title-header">Our Attainments</h2>
              </div>
            </div>

            <div className="row p-5">
              {[
                { img: institution, count: "100+", text: "Institutions registered" },
                { img: coach, count: "130+", text: "Coach registered" },
                { img: tournament, count: "1000", text: "Tournaments Held" },
                { img: athelete, count: "200+", text: "Atheletes Joined" },
              ].map((item, index) => (
                <div key={index} className="col-12 col-md-3 mb-4">
                  <div className="d-flex flex-column justify-content-start align-items-center">
                    <img src={item.img} alt={item.text} height="88" width={110} className="img-fluid" />
                    <h1 className="text-dark font-weight-bold">{item.count}</h1>
                    <p className="text-bold text-dark fs-4">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Panelist Section */}
        <div className="container-fluid p-0 bgEvent">
        <div className="row d-flex flex-row py-3 mx-5">


<div className="col-12 col-md-7 ">
    <h2 className="text-center text-md-start d-flex justify-content-end align-items-center justify-content-md-end mx-2 py-3  title-header">Meet Our Panelists</h2>
  </div>

<div className="col-12 col-md-5 d-flex justify-content-end justify-content-md-end" >
    <a className="fs-4" id="viewMore"><img src={viewMore} height={84} data-toggle="tooltip" data-placement="top" title="View more" /></a>
  </div>
</div>

          <div className="row mt-4">
            {[
              { img: pro1, name: "Michael Carter", role: "Sports Scientist, Velox Panelist" },
              { img: pro2, name: "James Anderson", role: "Performance Analyst, Velox Panelist" },
              { img: pro3, name: "Sophia Williams", role: "Biomechanics Expert, Velox Panelist" },
              { img: pro4, name: "Daniel Brown", role: "Rehabilitation Specialist, Velox Panelist" },
              { img: pro5, name: "Samantha Lee", role: "Athletic Trainer, Velox Panelist" },
              { img: pro6, name: "Johnson", role: "Sports Psychologist, Velox Panelist" },
            ].map((panelist, index) => (
              <div key={index} className="col-md-2 col-sm-4 col-6 profile-container p-0">
                 <img src={panelist.img} alt={panelist.name} className="img-fluid" />
                <div className="profile-wrapper">
                  <div className="popup-text">
                    <h3 id="panelistName">{panelist.name}</h3>
                    <p className="fs-6">{panelist.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sponsors Section */}
        <div className="container-fluid my-5 py-5">
          <div className="row my-3">
            <div className="col d-flex justify-content-center">
              <h2 className="title-header">Our Sponsors / Partners</h2>
            </div>
          </div>
          <div className="row p-0">
            {[school, university, sports, cosco].map((sponsor, index) => (
              <div key={index} className="col-12 col-md-3 mb-4">
                <div className="d-flex flex-column justify-content-start align-items-center">
                  <img src={sponsor} alt={`Sponsor ${index + 1}`} className="img-fluid" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="container-fluid my-5 faqBg">
  <div className="row d-flex flex-row py-3 mx-md-5 mx-3">
    {/* Title Column */}
    <div className="col-12 col-md-8">
      <h2 className="text-center text-md-start d-flex justify-content-end align-items-center justify-content-md-end mx-md-5 py-3 title-header">
        Frequently Asked Questions
      </h2>
    </div>

    {/* View More Column */}
    <div className="col-12 col-md-4 d-flex justify-content-end justify-content-md-end">
      <a className="fs-4" id="viewMore">
        <img
          src={viewMore}
          height={84}
          data-toggle="tooltip"
          data-placement="top"
          title="View more"
          alt="View more"
        />
      </a>
    </div>
  </div>

  <div className="row justify-content-center align-items-center">
    {/* Image Column */}
    <div className="col-12 col-md-6 col-lg-5 d-flex justify-content-center mb-4 mb-md-0">
      <img
        src={faq}
        className="img-fluid"
        alt="Frequently asked questions"
      />
    </div>

    {/* Accordion Column */}
    <div className="col-12 col-md-6 col-lg-5">
      <div className="wrapper">
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="item" key={dataItem.id}>
                <div
                  onClick={
                    enableMultiSelection
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                  className="title"
                >
                  <h5>{dataItem.question}</h5>
                  <span>
                    <img
                      src={dropdown}
                      alt="drop-down"
                      height={24}
                      className="dropdown-icon"
                    />
                  </span>
                </div>
                {enableMultiSelection
                  ? multiple.indexOf(dataItem.id) !== -1 && (
                      <div className="content">{dataItem.answer}</div>
                    )
                  : selected === dataItem.id && (
                      <div className="content">{dataItem.answer}</div>
                    )}
              </div>
            ))
          ) : (
            <div> No data found !</div>
          )}
        </div>
      </div>
    </div>
  </div>
</div>
</div>
       
      {/* Get in touch Section */}
<div className="container-fluid my-5 py-5">
  <div className="row my-3">
    <div className="col-12 d-flex justify-content-center">
      <h2 className="title-header">Get in Touch </h2>  
    </div>
  </div>
  <div className="row justify-content-center my-5">
    <div className="col-6 col-md-10 col-lg-6 d-flex justify-content-center mb-4">
      <div className="card w-75">
        <img src={headoffice} alt="map image" className="img-fluid" id="map" />
      </div>
    </div>
    <div className="col-12 col-md-10 col-lg-4">
      <div className="row justify-content-around">
        <div className="col-12 col-md-4 d-flex flex-column align-items-start mb-4 w-50">
          <h4>Head  office </h4>
          <br/>
          <p>Bay st & Larkin st, Pune, India</p>
          <p><span><i class="bi bi-telephone-fill mx-2"></i></span><a href="tel:+919988443322" className="text-dark fs-5 py-1 text-decoration-none">+919988443322</a></p>
          <p><span><i class="bi bi-envelope-at-fill mx-2"></i></span><a href="mailto:velox@company.com" className="text-dark fs-5 py-1 text-decoration-none">velox@company.com</a></p>
        </div>
       
        <div className="col-12 col-md-4 d-flex flex-column align-items-start mb-4 w-50 gap-1">
          <h4>Regional office </h4>
          <select class="form-select" aria-label="Default select example">
          <option selected>Select State</option>
          <option value="1">Chennai</option>
          <option value="2">Mumbai</option>
          <option value="3">Banglore</option>
          <option value="4">Delhi</option>
        </select>
      <br/>
          <p><span><i class="bi bi-telephone-fill mx-2"></i></span>: <a href="tel:+919988443322" className="text-dark fs-5 py-1 text-decoration-none">+919988443322</a></p>
          <p><span><i class="bi bi-envelope-at-fill mx-2"></i></span>: <a href="mailto:velox@company.com" className="text-dark fs-5 py-1 text-decoration-none">velox@company.com</a></p>
        </div>
      </div>
    </div>
  </div>
</div>
        {/* Footer Section */}
        <div className="container-fluid bg-dark p-0">
          <footer className="bg-dark p-5 m-0">
            <div className="row">
              {/* Logo Section */}
              <div className="col-md-3 mb-3 text-start">
                <a href="/" className="d-flex align-items-center text-decoration-none">
                  <img src={footerlogo} alt="Velox Athlete Logo" className="orangeLogo" height="208" />
                </a>
              </div>

              <div className="col-md-3 mb-3 text-start"></div>

              {/* Quick Links */}
              <div className="col-md-2 mb-3 text-start">
                <h5 className="textOrange">Quick Links</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">About us</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Services</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Tournaments</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Careers</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Contact us</a></li>
                </ul>
              </div>

              {/* Support */}
              <div className="col-md-2 mb-3 text-start">
                <h5 className="textOrange">Support</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">FAQ</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Help Center</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Terms & Conditions</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Privacy Policy</a></li>
                </ul>
              </div>

              {/* Social Media */}
              <div className="col-md-2 mb-3 text-start">
                <h5 className="textOrange">Social Media</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Facebook</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Twitter</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Instagram</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">LinkedIn</a></li>
                </ul>
              </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="d-flex justify-content-between mt-4 border-top pt-3 p-2">
              <p className="text-white mb-0 text-start p-1">&copy; 2025 Velox Athelotech. All rights reserved.</p>
              <p className="text-white mb-0 text-start p-1">Innovatively Created by Group of Developers</p>
            </div>
          </footer>
        </div>
      </div>
    
  );
}