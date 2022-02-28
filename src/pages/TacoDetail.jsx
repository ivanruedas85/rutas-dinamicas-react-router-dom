import React from "react";
import { useParams } from "react-router-dom";

const TacoDetail = () => {
  const { taco } = useParams();
  return (
    <>
      <h1>Taco Detail {taco}</h1>
    </>
  );
};
export default TacoDetail;
