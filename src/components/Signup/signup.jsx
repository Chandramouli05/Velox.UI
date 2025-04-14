import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import veloxGreyLogo from "../../img/velox-grey-logo.svg";
import "./signup-styles.css";
import veloxLogoOrange from '../../img/orangelogo.svg';
import homeIcon from '../../img/Home-icon.svg';
import veloxLoginLogo from '../../img/velox-72x86.svg';
import { SignupUser } from "../../services/authservice.js";


export default function Signup() {
  const navigate = useNavigate();
  const [date, setDate] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  let   [mobileNumber, setMobileNumber] = useState('');
  const [gender, setGender] = useState('');
  const [role, setRole] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); // Loading state
  const [status, setStatus] = useState(false);
  const [alert, setAlert] = useState(" ");
  const [showModal, setShowModal] = useState(false);
  const [mobilenumberStatus, setMobilenumberstatus] = useState(false);
  // const handleShow = () => setShowModal(true);
  const handleClose = () =>{ 
    navigate('/login');
  };


  

  const handleMobileNumberChange = (event) => {
    let value = event.target.value;

    if (!value.startsWith("+91")) {
      value = "+91" + value.replace(/\D/g, "");
    } else {
      value = "+91" + value.slice(3).replace(/\D/g, "");
    }

    if (value.length > 13) {
      value = value.slice(0, 13);
    }

    setMobileNumber(value);

    if (value.length !== 13) {
      setMobilenumberstatus("Enter mobile number");
    } else {
      setMobilenumberstatus("Mobile number is valid.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true

    try {
      mobileNumber = mobileNumber.replace(/^\+91/, '').trim();
      const data = await SignupUser(mail, password, mobileNumber, gender, role, date);
      setMessage('Registration Successful!');
      console.log('Registration Successful!', data);
     

 

      // Save token to localStorage (if applicable)
      if (data.token) {
        localStorage.setItem('token', data.token);
       
      }
     

      // Redirect to login or dashboard
      // navigate('/login');
    } catch (err) {
      setMessage(err.message || 'Registration Failed!');
      console.error('Registration Failure!', err);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="signup-main">
      <div className="container-fluid">
        {/* Navbar */}
        <div className="col d-flex justify-content-start m-0">
          <div className="d-flex flex-row flex-shrink-1 bd-highlight my-2 mx-3 align-items-center gap-1 my-4" to="/">
            <img src={veloxLoginLogo} height={64} width={64} alt="Velox Logo" />
            <div className="brand-header d-flex flex-row">
              <h3 className="m-0">Velox</h3>
              <p className="mx-2 my-1">Athelotech</p>
            </div>
          </div>
        </div>

    
     
     {message && (
       <div className="row">
         <div className="col d-flex justify-content-center">
         
         <div  class={message === "Registration Failed!" ? "alert alert-danger alert-dismissible w-50":"alert alert-success alert-dismissible w-50"} role="alert">
          <div>{message}</div>   
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={handleClose}></button>
        </div>
       
         </div>
       </div>
      )}

{/* 
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
                    </div> */}
        
   

        {/* Card section */}
        <div className="d-flex justify-content-center">
          <div className="SignupCard mx-2">
            <div className="leftContent">
              <div className="col d-flex justify-content-start m-0">
                <div className="breadcrumbs">
                  <Link className="flex-shrink-1 bd-highlight my-2 mx-2" to="/" id="forgot_pwd">
                    <span><img src={homeIcon} height={24} width={24} id='homeIcon' alt="Home Icon" /></span>
                  </Link>
                  <Link className="flex-shrink-1 bd-highlight my-2" to="/signup" id="forgot_pwd">/ Sign up</Link>
                </div>
              </div>

              <div className="col p-3">
                <div className="heading_part text-start m-4">
                  <h2 id="heading_text">Sign up</h2>
                  <p>Welcome back! Please enter your details</p>
                </div>

                <form onSubmit={handleSubmit} className="mb-3 d-flex flex-column gap-3">
                  <div className="mx-4 Name-fields w-75">
                    <input type="text" className="mx-0 form-control w-50" placeholder="First Name" id="first-name" required />
                    <input type="text" className="mx-0 form-control w-50" placeholder="Last Name" id="last-name" required />
                  </div>
                  <input type="email" className="mx-4 form-control w-75" placeholder="Email" id="email" value={mail} onChange={(e)=>setMail(e.target.value)} required />
                  <input type="password" className="mx-4 form-control w-75" placeholder="Password" id="password" value={password} onChange={(e)=> setPassword(e.target.value)} required />
                  <input type="password" className="mx-4 form-control w-75" placeholder="Re-enter Password" id="re-enter_password" required />

                  <div className="d-flex form-floating">
                    <input type="date" className="mx-4 form-control w-75" id="dob" value={date} onChange={(e)=> setDate(e.target.value)} required />
                    <label htmlFor="dob">Date of Birth</label>
                  </div>

                  <div className="d-flex flex-row mx-4">
                    <div className="form-check mx-2">
                      <input className="form-check-input" type="radio" name="gender" id="male" value="Male" checked={gender === "Male"} onChange={(e)=> setGender(e.target.value)}/>
                      <label className="form-check-label" htmlFor="male">Male</label>
                    </div>
                    <div className="form-check mx-2">
                      <input className="form-check-input" type="radio" name="gender" id="female" value="Female" checked={gender === "Female"} onChange={(e)=> setGender(e.target.value)} />
                      <label className="form-check-label" htmlFor="female">Female</label>
                    </div>
                    <div className="form-check mx-2">
                      <input className="form-check-input" type="radio" name="gender" id="others" value="Others" checked={gender === "Others"} onChange={(e)=> setGender(e.target.value)} />
                      <label className="form-check-label" htmlFor="others">Others</label>
                    </div>
                  </div>

                  <input type="tel" className="mx-4 form-control w-75" placeholder="Phone number" id="phone_number" value={mobileNumber} onChange={handleMobileNumberChange} maxLength={13} required />
                 {mobilenumberStatus && (<p className="mx-4">{mobilenumberStatus}</p>)}
                  <select className="mx-4 form-select w-75" aria-label="Register as" value={role} onChange={(e)=> setRole(e.target.value)}>
                    <option value="">Register as</option>
                    <option value="associate">Associate</option>
                    <option value="athlete">Athlete</option>
                  </select>


                  <button type="submit" className="btn btn-orange w-75 mx-4">Sign up</button>
                </form>

                <div className="d-flex flex-column my-2 mx-4 w-75">
                  <p>or</p>
                  <Link className="flex-shrink-1 bd-highlight mx-5" to="/login" id="forgot_pwd">LOGIN</Link>
                </div>
                <hr />

                <div className="d-flex flex-column my-2 mx-4 w-75">
                  <p>Follow us on</p>
                  <div className="mb-3 d-flex flex-row justify-content-center">
                    <Link className="flex-shrink-1 bd-highlight mx-5" to="/login" id="forgot_pwd"><span><i className="bi bi-facebook"></i></span></Link>
                    <Link className="flex-shrink-1 bd-highlight mx-5" to="/login" id="forgot_pwd"><span><i className="bi bi-instagram"></i></span></Link>
                    <Link className="flex-shrink-1 bd-highlight mx-5" to="/login" id="forgot_pwd"><span><i className="bi bi-twitter-x"></i></span></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="rightContent"></div>
           

            
          </div>
        </div>
      </div>
    </div>
  );
}