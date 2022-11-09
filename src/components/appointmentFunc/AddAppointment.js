import { React, useEffect } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form';

function AddAppointment() {
  const {
    register,
    handleSubmit,
    //formState: { errors },
  } = useForm();

  const url = "http://localhost:8082";

  const handle = (data) => {
    axios.post(`${url}/appointments`, data)
    .then((response) => {
      console.log(response);
      alert("Booked Succesfully");
    }, error => {
      console.log(error);
      console.log("error");
      alert("Error!!!")
    });
  };
  const handleError = (errors) => { };

  useEffect(() => {
    document.title = "Book Appointment";
  }, []);

  return (
    <>
      <>
        <div className="Auth-form-container">
          <div className="container row m-1" >
            <div className="col m-1 pt-4" >
              <form className="Auth-form mx-auto align-middle" style={{ background: "lightgrey" }}
                onSubmit={handleSubmit(handle, handleError)}>
                <div className="Auth-form-content">
                  <h3 className="Auth-form-title pt-3">Book Appointment</h3>
                  {/*Patient Name */}
                  <div className="form-group mt-3">
                    <label>Name</label>
                    <input type="name" className="form-control mt-1"
                      name="patientName" placeholder="Enter Name"
                      {...register("patientName")} />
                  </div>

                  {/*Doctor Name */}
                  <div className="form-group mt-3">
                    <label>Doctor Name</label>
                    <input type="name" className="form-control mt-1"
                      name="doctorName" placeholder="Enter Doctor Name"
                      {...register("doctorName")} />
                  </div>

                  {/* Password */}
                  <div className="form-group mt-3">
                    <label>Date</label>
                    <input type="date" className="form-control mt-1"
                      name="date" placeholder="Enter password"
                      {...register("date")} />
                  </div>
                  {/* Submit */}
                  <div className="d-grid gap-3 mt-1 p-3">
                    <button type="submit" className="btn btn-primary" 
                    onClick="window.location.reload();" >
                      Submit
                    </button>

                  </div>

                  <p></p>
                </div>
              </form>
            </div>
            <div className="col-4  m-1 pt-2" >
              <img className="rounded mx-auto d-block shadow"
                src="https://st.depositphotos.com/1598598/2023/i/600/depositphotos_20236679-stock-photo-yellow-paper-note-with-text.jpg"
                alt="" style={{ width: "100%" }} />
            </div>
          </div>

        </div>
      </>
    </>
  )
}

export default AddAppointment
