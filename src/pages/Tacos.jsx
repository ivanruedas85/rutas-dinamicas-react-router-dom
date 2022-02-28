import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";

const Tacos = () => {
  const { taco } = useParams();
  return (
    <>
      <h1>Tacos</h1>
      {taco}
      <Link to="detail">Detalles</Link>
      <Outlet />
    </>
  );
};
export default Tacos;
