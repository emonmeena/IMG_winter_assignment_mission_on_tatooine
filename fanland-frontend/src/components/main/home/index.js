import React from "react";
import Club from "../club";

export default function Home() {
  return (
    <div className="px-3 overflow-auto container-home">
      <div className="py-5">
        <p className="pt-5 fs-large fw-bolder">HOME</p>
      </div>
      <div>
        <p className="fw-bold pb-1">Following</p>
        <div className="custom-border-top">
          <div className="clubs-container">
            {data.map((dataItem, index) => (
              <Club
                key={index}
                clubName={dataItem.name}
                clubDes={dataItem.des}
                clubId={dataItem.id}
                imageurl={dataItem.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    name: "The MIB Force",
    des: "The description of this club appear here.",
    image:
      "http://sportofboxing.com/wp-content/uploads/2012/06/Challenging-Julius-Ballo-for-the-biggest-fan-club-is-Armando-Guerrero-500x320.jpg",
    id: "the_mib_force",
  },
  {
    name: "Andhadhun baatein",
    des: "The description of this club appear here.",
    image:
      "https://static.toiimg.com/thumb/msid-65705780,imgsize-105691,width-800,height-600,resizemode-75/65705780.jpg",
    id: "andhadhun_baatein",
  },
  {
    name: "The MIB Force",
    des: "The description of this club appear here.",
    image:
      "http://sportofboxing.com/wp-content/uploads/2012/06/Challenging-Julius-Ballo-for-the-biggest-fan-club-is-Armando-Guerrero-500x320.jpg",
    id: "the_mib_force",
  },
  {
    name: "Andhadhun baatein",
    des: "The description of this club appear here.",
    image:
      "https://static.toiimg.com/thumb/msid-65705780,imgsize-105691,width-800,height-600,resizemode-75/65705780.jpg",
    id: "andhadhun_baatein",
  },
  {
    name: "The MIB Force",
    des: "The description of this club appear here.",
    image:
      "http://sportofboxing.com/wp-content/uploads/2012/06/Challenging-Julius-Ballo-for-the-biggest-fan-club-is-Armando-Guerrero-500x320.jpg",
    id: "the_mib_force",
  },
  {
    name: "Andhadhun baatein",
    des: "The description of this club appear here.",
    image:
      "https://static.toiimg.com/thumb/msid-65705780,imgsize-105691,width-800,height-600,resizemode-75/65705780.jpg",
    id: "andhadhun_baatein",
  },
  {
    name: "The MIB Force",
    des: "The description of this club appear here.",
    image:
      "http://sportofboxing.com/wp-content/uploads/2012/06/Challenging-Julius-Ballo-for-the-biggest-fan-club-is-Armando-Guerrero-500x320.jpg",
    id: "the_mib_force",
  },
  {
    name: "Andhadhun baatein",
    des: "The description of this club appear here.",
    image:
      "https://static.toiimg.com/thumb/msid-65705780,imgsize-105691,width-800,height-600,resizemode-75/65705780.jpg",
    id: "andhadhun_baatein",
  },
  {
    name: "The MIB Force",
    des: "The description of this club appear here.",
    image:
      "http://sportofboxing.com/wp-content/uploads/2012/06/Challenging-Julius-Ballo-for-the-biggest-fan-club-is-Armando-Guerrero-500x320.jpg",
    id: "the_mib_force",
  },
  {
    name: "Andhadhun baatein",
    des: "The description of this club appear here.",
    image:
      "https://static.toiimg.com/thumb/msid-65705780,imgsize-105691,width-800,height-600,resizemode-75/65705780.jpg",
    id: "andhadhun_baatein",
  },
  {
    name: "The MIB Force",
    des: "The description of this club appear here.",
    image:
      "http://sportofboxing.com/wp-content/uploads/2012/06/Challenging-Julius-Ballo-for-the-biggest-fan-club-is-Armando-Guerrero-500x320.jpg",
    id: "the_mib_force",
  },
  {
    name: "Andhadhun baatein",
    des: "The description of this club appear here.",
    image:
      "https://static.toiimg.com/thumb/msid-65705780,imgsize-105691,width-800,height-600,resizemode-75/65705780.jpg",
    id: "andhadhun_baatein",
  },
  {
    name: "The MIB Force",
    des: "The description of this club appear here.",
    image:
      "http://sportofboxing.com/wp-content/uploads/2012/06/Challenging-Julius-Ballo-for-the-biggest-fan-club-is-Armando-Guerrero-500x320.jpg",
    id: "the_mib_force",
  },
  {
    name: "Andhadhun baatein",
    des: "The description of this club appear here.",
    image:
      "https://static.toiimg.com/thumb/msid-65705780,imgsize-105691,width-800,height-600,resizemode-75/65705780.jpg",
    id: "andhadhun_baatein",
  },
  {
    name: "The MIB Force",
    des: "The description of this club appear here.",
    image:
      "http://sportofboxing.com/wp-content/uploads/2012/06/Challenging-Julius-Ballo-for-the-biggest-fan-club-is-Armando-Guerrero-500x320.jpg",
    id: "the_mib_force",
  },
  {
    name: "Andhadhun baatein",
    des: "The description of this club appear here.",
    image:
      "https://static.toiimg.com/thumb/msid-65705780,imgsize-105691,width-800,height-600,resizemode-75/65705780.jpg",
    id: "andhadhun_baatein",
  },
  {
    name: "The MIB Force",
    des: "The description of this club appear here.",
    image:
      "http://sportofboxing.com/wp-content/uploads/2012/06/Challenging-Julius-Ballo-for-the-biggest-fan-club-is-Armando-Guerrero-500x320.jpg",
    id: "the_mib_force",
  },
  {
    name: "Andhadhun baatein",
    des: "The description of this club appear here.",
    image:
      "https://static.toiimg.com/thumb/msid-65705780,imgsize-105691,width-800,height-600,resizemode-75/65705780.jpg",
    id: "andhadhun_baatein",
  },
];
