import React from "react";
import { Link } from "react-router-dom";
import "./club.css";

export default function Club({ imageurl, clubName, clubDes, clubId }) {
  return (
    <div className="club-layout my-2">
      <Link to={`/clubs/${clubId}`} className="club-layout" >
        <div
          style={{
            backgroundImage: `url(${imageurl})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
          }}
        ></div>
      </Link>
      <div className="mt-2">
        <h6 className="fw-bold mb-1">
          <p>{clubName}</p>
        </h6>
        <p className="text-white-50 small-text">{clubDes}</p>
      </div>
    </div>
  );
}
