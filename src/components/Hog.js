import React from "react";

function Hog({ hog, onclickHandler, isFullDetails }) {
  const { name, image, specialty, greased, weight, highestMedalAchieved } = hog;
  return (
    <div className="ui  card" onClick={() => onclickHandler(name)}>
      <h2>{name}</h2>
      <img src={image} alt="" />
      {isFullDetails && (
        <div>
          <p>Specialty: {specialty}</p>
          <p>Weight: {weight}</p>
          <p>Greased: {greased ? "Yes" : "No"}</p>
          <p>Highest Medal Achieved: {highestMedalAchieved}</p>
        </div>
      )}
    </div>
  );
}

export default Hog;
