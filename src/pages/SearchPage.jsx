import React from "react";
import { Link } from "react-router-dom";

const SearchPage = () => {
  const tacos = ["cohinita", "pastor", "asada", "tripa"];
  return (
    <>
      <h1>SearchPage</h1>
      <ul>
        {tacos.map((taco) => (
          <li key={taco}>
            <Link to={`/tacos/${taco}`}>{taco}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default SearchPage;
