import axios from 'axios';
import React from 'react'


function AppointmentDisplay({ appointment }) {
  const url = "http://localhost:8082";

  function deleteRow(id, e) {
    axios.delete(`${(url)}/appointments/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        const posts = this.state.posts.filter(item => item.id !== id);
        this.setState({ posts });
      });
    e = window.location.reload();
  };

  return (
    <>
      <div className="container border rounded my-2 p-2 bg-light">
        <div className="container row">
          <h6 className="col-3 text-center pt-2">{appointment.patientName}</h6>
          <h6 className="col-3 text-center pt-2">{appointment.doctorName}</h6>
          <h6 className="col-3 text-center pt-2">{appointment.date}</h6>
          <button className="col btn btn-danger mx-2"
            onClick={(e) => deleteRow(appointment.id, e)}
          >Delete</button>
        </div>
      </div>
    </>
  )
}

export default AppointmentDisplay
