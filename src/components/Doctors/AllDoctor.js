import React, { useState, useEffect } from 'react'
import DoctorDisplay from './DoctorDisplay'
import axios from 'axios';
import './Doctor.css'

function Doctor() {
  const [doctors, setDoctors] = useState([]);

  // function to call server
  const url = "http://localhost:8080"

  const getDoctors = () => {
    axios.get(`${url}/doctors`).then(
      (response) => {
        console.log(response.data);
        setDoctors(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  useEffect(() => {
    document.title = "All Doctors";
    getDoctors();
  }, []);

  return (
    <>
      <div className="continer text-center p-3">
        <h1><em><b> Our Doctors </b></em></h1>
      </div>

      <div className="container rounded text-center ">
        <div className="">
          <div className="row">
            {doctors.length > 0 ? doctors.map((item) =>
              <DoctorDisplay key={item.id} doctor={item} />
            ) : <h4 className="text-center">"No Doctors"</h4>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Doctor
