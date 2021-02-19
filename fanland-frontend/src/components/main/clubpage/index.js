import React from "react";
import { Link, useParams } from "react-router-dom";


export default function ClubPage() {
  const { clubId } = useParams();
  return <div>clubpage for {clubId}
  <div>
    <Link to={`/chats/${clubId}`}>
      <button>open chats</button>
    </Link>
  </div>
  </div>;
}
