import React from 'react'

function Banner() {
  return (
    <>
      <div className="container-fluid my-3">
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="container carousel-inner">
            <div className="carousel-item active" data-bs-interval="5000" >
              <img src="https://balcomedicalcentre.com/uploads/slider/home_Website%20Banner-01.jpg" 
              className="rounded d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="5000" >
              <img src="https://balcomedicalcentre.com/uploads/slider/home_Website%20Banner-02.jpg" 
                className="rounded d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="5000" >
              <img src="https://balcomedicalcentre.com/uploads/slider/home_Website%20Banner-03.jpg" 
                className="rounded d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Banner
