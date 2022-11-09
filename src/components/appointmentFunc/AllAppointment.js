import React, { useState, useEffect } from 'react'
import AppointmentDisplay from './AppointmentDisplay'
import axios from 'axios';

function AllAppointment() {
  useEffect(() => {
    document.title = "All Appointment";
    getAppointments();
  }, []);

  const [appointments, setAppointments] = useState([]);

  // function to call server
  const getAppointments = () => {
    axios.get(`http://localhost:8082/allAppointments`).then(
      response => {
        console.log(response);
        setAppointments(response.data)
      },
      (error) => {
        console.log(error)
      }
    )
  }

  return (
    <>
      <div className="container p-2">
        <h1 className="text-center p-1">All Appointments</h1>

        <div className="container border rounded bg-info text-dark my-2 p-2 ">
          <div className="container row mt-2">
            <h5 className="col-3 text-center"><em><b> Patient Name </b></em></h5>
            <h5 className="col-3 text-center"><em><b> Doctor Name </b></em></h5>
            <h5 className="col-3 text-center"><em><b> Date </b></em></h5>
          </div>
        </div>

        <div className="container">
          {appointments.length > 0 ? appointments.map((item) => {
            return (<AppointmentDisplay key={item.id} appointment={item} />)
          }) : <h4 className="text-center">"No Appointments"</h4>
          }
        </div>

      </div>
    </>
  )
}

export default AllAppointment
