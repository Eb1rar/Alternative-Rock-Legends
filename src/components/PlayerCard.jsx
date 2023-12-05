import React from "react";

const PlayerCard = ({ name, img, statistics }) => {
  return (
    <div>
      <img src={img} alt="" width="200px" />
      <h4>{name}</h4>
    </div>
  );
};

export default PlayerCard;
