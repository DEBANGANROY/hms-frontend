import React from 'react'

function DoctorDisplay({ doctor }) {
  return (
    <>
      <div className="card col m-2" style={{ width: "18rem" }}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Male_Doctor_Flat_Icon_Vector.svg/1200px-Male_Doctor_Flat_Icon_Vector.svg.png"
          className="card-img-top border rounded mt-1" alt="..." />
        <div className="card body" style={{ border: "0" }}>
          <h6 className="m-2"><b>{doctor.name}</b></h6>
          <h6 className="m-2">{doctor.regId}</h6>
          <h6 className="m-2">{doctor.specialization}</h6>
          <h6 className="m-2">{doctor.description}</h6>
        </div>
        <div className="m-1">
          <a className="btn btn-primary" href="/appointments" role="button">
            Book Appointment</a>
        </div>
      </div>
    </>
  )
}

export default DoctorDisplay
