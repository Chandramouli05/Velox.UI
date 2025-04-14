import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
// import veloxLogo from "../../img/velox logo.svg";
import football from "../../img/Football-velox.svg";
import "./login-styles.css";
import footerlogo from "../../img/footer-logo.svg";
import homeIcon from '../../img/Home-icon.svg';
import veloxLoginLogo from '../../img/velox-72x86.svg';
import loginbg from '../../img/LoginBg.svg';
import pwdlock from '../../img/pwd_lock.svg';
import { loginUser } from "../../services/authservice.js"; 
import OtpInput from "react-otp-input";



export default function Login() {
  const navigate = useNavigate();
  const [captchaValue, setCaptchaValue] = useState(false);

  const [mail, setMail] = useState('');
  const [password, setPassword]  = useState('');
  const [message, setMessage]= useState('');
  const [otp, setOtp] = useState('');

 
  const handleSubmit = async(e) => {

    e.preventDefault();
    if(!captchaValue){
      setMessage("Please verify the captcha");
    }

    try{
      const data = await loginUser(mail, password);
      setMessage('Login Successful!');
      localStorage.setItem('token', data.token);
    } catch(err){
      setMessage(err);
    }
  };

  const handleCaptchaChange = (value) => {
    console.log(value);
    setCaptchaValue(!!value);
  };

  const [showModal, setShowModal] = useState(false);
  const [showOTPModal, setShowOTPModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
    setShowOTPModal(false);

  }


  const handleOTP = () => setShowOTPModal(true);
  
  const handleChange = (otp) => {
    setOtp(otp);
  }
      


  return (
    <div className="signup-main">
     
    <div className="container-fluid">
      {/* Navbar */}
       
      <div className="col d-flex justify-content-start m-0">
                   <div className="d-flex flex-row flex-shrink-1 bd-highlight my-2 mx-3 align-items-center gap-1 my-4" to="/">
                   <img src={veloxLoginLogo} height={64} width={64} />
                   <div className="brand-header d-flex flex-row">
                   <h3 className="m-0">Velox</h3>
                   <p className="mx-2 my-1">Athelotech</p>
                   </div>
                  
                </div>
      </div>

      {/*Card section */}

      <div className="container-fluid d-flex justify-content-center">
         <div className="loginCard mx-2">
            <div className="leftContent">
            <div className="col d-flex justify-content-start m-0">
                  <div className="breadcrumbs">
                  <Link className="flex-shrink-1 bd-highlight my-2 mx-2" to="/" id="forgot_pwd">
                   <span><img src={homeIcon} height={24} width={24} id='homeIcon' /></span></Link>

                   <Link className="flex-shrink-1 bd-highlight my-2" to="/login" id="forgot_pwd">/ Login</Link>            
                  </div>
                   

            </div>

            <div className="col p-3">
            <div className="heading_part text-start m-4">
                  <h2 id="heading_text">Login</h2>
                  <p>welcome back! Please enter your details</p>
                </div>
          <form onSubmit={handleSubmit}>
              <div class="mb-3 d-flex flex-column gap-3">
                <input type="email" class="mx-4 form-control w-75" placeholder="Email" id="exampleInputEmail1" aria-describedby="emailHelp" value={mail} onChange={(e)=> setMail(e.target.value)} required/>
                <input type="password" class="mx-4 form-control w-75" placeholder="Password" id="exampleInputEmail1" aria-describedby="emailHelp" value={password} onChange={(e)=> setPassword(e.target.value)} required/>
                <Link className="d-flex justify-content-end w-75" to="/login" data-toggle="modal" data-target="#exampleModal"  onClick={handleShow} id="forgot_pwd">Forgot Password?</Link>

{/*forgot password section */}
                {showModal && (
        <div className="modal fade show p-5" style={{ display: 'block' }} tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered modal-xl d-flex justify-content-center align-items-center" role="document">
            <div className="modal-content mx-0">
              <div className="modal-body d-flex flex-row justify-content-between align-items-start">
                <div className="headerPart d-flex flex-column align-items-start mx-3">
                  <h2 id="heading_text">Forgot Password</h2>
                  <p>Enter your mail ID to reset the password</p>
                  </div>
                
                <a className="close" data-dismiss="modal" onClick={handleClose}>
                  <span aria-hidden="true"><i class="bi bi-x-lg"></i></span>
                </a>
               

              </div>

              <div className="forgotPwd_body col-12 d-flex flex-row">
              <div className="modalBody col-6 d-flex flex-column gap-3 align-items-start justify-contents-start mx-4 my-3">
                {/* Add your content here */}
                <input type="email" class="form-control w-75" placeholder="Email" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                <button type="submit" class="btn btn-orange w-75" disabled={!captchaValue}>Reset Password</button>
              </div>

              <div className="forgetPwd_rightSide col-6">
                <img src={pwdlock} height={180} width={180} class="mb-5"/>
              </div>
              </div>
              
            </div>
          </div>
        </div>
      )}



{showModal && (
        <div className="modal fade show p-5" style={{ display: 'block' }} tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered modal-xl d-flex justify-content-center align-items-center" role="document">
            <div className="modal-content mx-0">
              <div className="modal-body d-flex flex-row justify-content-between align-items-start">
                <div className="headerPart d-flex flex-column align-items-start mx-3">
                  <h2 id="heading_text">Forgot Password</h2>
                  <p>Enter your mail ID to reset the password</p>
                  </div>
                
                <a className="close" data-dismiss="modal" onClick={handleClose}>
                  <span aria-hidden="true"><i class="bi bi-x-lg"></i></span>
                </a>
               

              </div>

              <div className="forgotPwd_body col-12 d-flex flex-row">
              <div className="modalBody col-6 d-flex flex-column gap-3 align-items-start justify-contents-start mx-4 my-3">
                {/* Add your content here */}
                <input type="email" class="form-control w-75" placeholder="Email" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                <button type="submit" class="btn btn-orange w-75" onClick={handleOTP}>Reset Password</button>
              </div>

              <div className="forgetPwd_rightSide col-6">
                <img src={pwdlock} height={180} width={180} class="mb-5"/>
              </div>
              </div>
              
            </div>
          </div>
        </div>
      )}

      {/* Show OTP Modal*/}
      {showOTPModal && (
        <div className="modal fade show p-5" style={{ display: 'block' }} tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered modal-xl d-flex justify-content-center align-items-center" role="document">
            <div className="modal-content mx-0">
              <div className="modal-body d-flex flex-row justify-content-between align-items-start">
                <div className="headerPart d-flex flex-column align-items-start mx-3">
                  <h2 id="heading_text">Enter OTP</h2>
                  <p>Enter your OTP from registered mail</p>
                  </div>
                
                <a className="close" data-dismiss="modal" onClick={handleClose}>
                  <span aria-hidden="true"><i class="bi bi-x-lg"></i></span>
                </a>
               

              </div>

              <div className="forgotPwd_body col-12 d-flex flex-row">
              <div className="modalBody col-6 d-flex flex-column gap-3 align-items-start justify-contents-center mx-4 my-3">
                {/* Add your content here */}
                {/* <OtpInput value={otp}  onChange={(value) => { 
                  console.log("OTP Value:", value); 
                  setOtp(value);
                   }} numInputs={6} 
                   renderSeparator={<span> - </span>} 
                   renderInput={
                    (props) => <input {...props} id="otp" className="otp-input form-control text-center text-dark"/>}/> */}

<OtpInput
        value={otp}
        onChange={handleChange}
        numInputs={6}
        separator={<span style={{ width: "8px" }}></span>}
        isInputNum={true}
        shouldAutoFocus={true}
        inputStyle={{
          border: "1px solid rgb(185, 184, 184)",
          borderRadius: "5px",
          width: "54px",
          height: "54px",
          fontSize: "16px",
          color: "#000",
          fontWeight: "500",
          caretColor: "blue",
          margin: "0 5px"
        }}
        focusStyle={{
          border: "1px solid  #F14A00",
          outline: "none"
        }}
        renderInput={(props) => <input {...props} />}
      />

                  
                <button type="submit" class="btn btn-orange w-75" >Submit</button>
              </div>

              <div className="forgetPwd_rightSide col-6">
                <img src={pwdlock} height={180} width={180} class="mb-5"/>
              </div>
              </div>
              
            </div>
          </div>
        </div>
      )}





                <ReCAPTCHA 
                      sitekey="6LdH2vUqAAAAAFjOCUhLt0UQaSRBu_rJFkVD-VMb"
                      onChange={handleCaptchaChange} className="mx-4"
                    />
                <button type="submit" class="btn btn-orange w-75 mx-4" onClick={() => navigate("/dashboard")}>Login</button>



                <div class="d-flex flex-column my-2 mx-4 w-75">
  <p>or</p>
  <Link className="flex-shrink-1 bd-highlight  mx-5" to="/signup" id="forgot_pwd"> SIGN UP </Link>
  

</div>
<hr/>

<div class="d-flex flex-column my-2 mx-4 w-75">
  <p>Follow us on</p>
  <div class="mb-3 d-flex flex-row justify-content-center">
  <Link className="flex-shrink-1 bd-highlight  mx-5" to="/login" id="forgot_pwd"> <span ><i class="bi bi-facebook" ></i></span> </Link>
  <Link className="flex-shrink-1 bd-highlight  mx-5" to="/login" id="forgot_pwd"> <span><i class="bi bi-instagram"></i></span> </Link>
  <Link className="flex-shrink-1 bd-highlight  mx-5" to="/login" id="forgot_pwd"> <span><i class="bi bi-twitter-x"></i></span> </Link>
  </div>

</div>
              </div>
              </form>
            </div>


            </div>

            <div className="rightContent"></div>
         </div>
      </div>




      
    </div>

     
    </div>
  );
}
