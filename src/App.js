import './App.css';
import { Routes, Route} from "react-router-dom";
import LandingPage from './components/landingPage/LandingPage';
import Login from './components/Login/login';
import Signup from './components/Signup/signup';
import About from  './components/Aboutus/about';
import Dashboard from './components/Dashboard/dashboard';
import Employee from './components/Dashboard/Employee/employee';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element={ <LandingPage/>} />
        <Route path = "/login" element = { <Login/>} />
        <Route path = "/signup" element = { <Signup/>} />
        <Route path = "/aboutus" element = { <About/>} />
        <Route path= "/dashboard" element = { <Dashboard/>} />
        <Route path= "/dashboard/employee" element = { <Employee/>} />
       </Routes>
     
    </div>
  );
}

export default App;
