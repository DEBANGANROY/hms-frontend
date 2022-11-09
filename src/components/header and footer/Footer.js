import React from "react";

export default function Footer() {
  let footerStyle = {
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
    fontSize:"0.75em"
  };
  return (
    <>
      <div className="start-0 bottom-0" style={footerStyle}>
        <footer className="bg-dark text-light" > 
          <div className="container text-center">
            Copyright &copy; <br />
            Address: <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Velit veniam, magnam ullam expedita tempore officia nulla.
          </div>
        </footer>
      </div>
    </>
  );
}
