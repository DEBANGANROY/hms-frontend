import React from 'react'

function Aboutus() {
  return (
    <>
      <div className="container rounded text-center p-2 my-3" id="aboutus">
        <div className="row">
          <div className="col">
            <img src="https://balcomedicalcentre.com/uploads/slider/about_slider-1.png" alt="img" />
          </div>

          <div className="col">
            <div className="p-3">
              <h2 >About Us</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis tempore dolorem temporibus, non delectus aliquid.
                Ipsam magnam consectetur soluta eius, doloremque eveniet animi
                maxime ab adipisci iure vero ullam libero nulla alias delectus non?
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis tempore dolorem temporibus, non delectus aliquid.
                Ipsam magnam consectetur soluta eius, doloremque eveniet animi
                maxime ab adipisci iure vero ullam libero nulla alias delectus non?
              </p>
            </div>

            <div className="row">
              <div className="col p-2"><b>Call Us: </b>+91-987654321</div>
              <div className="col p-2"> <b>E-mail: </b>abc@xyz.com</div>
            </div>
          </div>



        </div>
      </div>
    </>
  )
}

export default Aboutus
