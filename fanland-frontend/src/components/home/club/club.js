import React from "react";
import "./club.css";

export default function Club({ imageurl, name, description }) {
  return (
    <div className="club-layout my-2">
      <div
        style={{
          backgroundImage: `url("http://sportofboxing.com/wp-content/uploads/2012/06/Challenging-Julius-Ballo-for-the-biggest-fan-club-is-Armando-Guerrero-500x320.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
        }}
      ></div>
      <div className="mt-2">
        <h6 className="fw-bold mb-1">Dark Knights</h6>
        <p className="text-white-50 small-text">Description of this club will appear here.</p>
      </div>
    </div>
  );
}
