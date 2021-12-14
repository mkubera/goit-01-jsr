import React from "react";
import { Link, useParams } from "react-router-dom";

const AboutPage = () => {
  const { user } = useParams();
  console.log(user);
  return (
    <>
      <h1>About {user}</h1>
      <Link to="/">Home</Link>
    </>
  );
};

export default AboutPage;
