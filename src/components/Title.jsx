import PropTypes from "prop-types";
import { useContext } from "react";
import { AppContext } from "./../utils/provider";
import { Link } from "react-router-dom";

const Title = ({ color = "green", title, subtitle, children }) => {
  const appTitle = useContext(AppContext).appTitle;

  return (
    <>
      <Link to="/about">About</Link>
      <Link to="/movies/1">Movie:Dune</Link>
      <h1>{appTitle}</h1>
      <h1 style={{ color }}>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{children}</p>
    </>
  );
};

Title.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Title;
