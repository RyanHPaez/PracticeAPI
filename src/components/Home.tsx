import React from "react";

function Home() {
  return (
    <div className="col-sm-12 text-center">
      <div className="resortImg">
        <h3> You found me!</h3>
        <img
          id="resortIcon"
          alt="resort"
          src={require("../images/resort.jpg")}
        />
      </div>
    </div>
  );
}

export default Home;
