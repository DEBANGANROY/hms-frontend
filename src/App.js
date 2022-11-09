import Login from "./components/login-signin/Login";
import Signin from "./components/login-signin/Signin";
import Footer from "./components/header and footer/Footer";
import Header from './components/header and footer/Header';
import About from './components/About';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Doctor from './components/Doctors/AllDoctor';
import AddAppointment from "./components/appointmentFunc/AddAppointment";
import Home from './components/Home';
import AllAppointment from "./components/appointmentFunc/AllAppointment";

function App() {
  return (
    <>
      <Header title="Hospital Manager" />

      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/registerNewUser" element={<Signin />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/doctors" element={<Doctor />}></Route>
          <Route path="/appointments" element={<AddAppointment />}></Route>
          <Route path="/allAppointments" element={<AllAppointment />}></Route>
        </Routes>

      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
