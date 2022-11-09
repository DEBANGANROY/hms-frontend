import React from 'react'

function Leaders() {
  return (
    <>
    <div className="container my-3">
        <div className="px-2">
          <h1 id="headline">Our Leaders</h1>
        </div>
        <div className="container  p-4" id="leaders">
          <div className="container row">
            <div className="col text-center">
              <img className="img-thumbnail" src="https://cdn1.iconfinder.com/data/icons/bokbokstars-121-classic-stock-icons-1/512/person-man.png"
                alt="img" style={{ height: "300px" }} />
            </div>
            <div className="col">
              <div className="p-3">
                <h2 >NAME</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quas architecto consequuntur nesciunt aliquid id itaque placeat
                  ipsam nostrum similique rem voluptas nemo, quidem inventore, error
                  sed mollitia perspiciatis praesentium consectetur.
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quas architecto consequuntur nesciunt aliquid id itaque placeat
                  ipsam nostrum similique rem voluptas nemo, quidem inventore, error
                  sed mollitia perspiciatis praesentium consectetur.
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="divider light my-4 text-center" />

        <div className="container  p-4" id="leaders">
          <div className="container row">
            <div className="col">
              <div className="p-3">
                <h2 >NAME</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quas architecto consequuntur nesciunt aliquid id itaque placeat
                  ipsam nostrum similique rem voluptas nemo, quidem inventore, error
                  sed mollitia perspiciatis praesentium consectetur.
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quas architecto consequuntur nesciunt aliquid id itaque placeat
                  ipsam nostrum similique rem voluptas nemo, quidem inventore, error
                  sed mollitia perspiciatis praesentium consectetur.
                </p>
              </div>
            </div>
            <div className="col  text-center">
              <img className="img-thumbnail" src="https://cdn1.iconfinder.com/data/icons/bokbokstars-121-classic-stock-icons-1/512/person-man.png"
                alt="img" style={{ height: "300px" }} />
            </div>
          </div>
        </div>

        <hr className="divider light my-4 text-center" />
        
    </div>
      
    </>
  )
}

export default Leaders
