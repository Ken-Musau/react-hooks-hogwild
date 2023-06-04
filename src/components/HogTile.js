import React, { useState } from "react";
import Hog from "./Hog";

function HogTile({ hogs }) {
  const [seletedHog, setSeletedHog] = useState("");

  const onclickHandler = (name) => {
    setSeletedHog(name);
  };

  return (
    <div className="ui grid container">
      {hogs.map((hog) => (
        <Hog
          key={hog.name}
          hog={hog}
          onclickHandler={onclickHandler}
          isFullDetails={seletedHog === hog.name}
        />
      ))}
    </div>
  );
}

export default HogTile;
