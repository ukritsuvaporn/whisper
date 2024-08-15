import React from "react";
//import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

//HomePage.propTypes = {};

export default HomePage;
