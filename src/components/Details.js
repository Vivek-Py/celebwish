// Utilise this component to show more details as user click on a card/celeb
// You can also ask user to enter the name

import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Details = (props) => {
  const [src, setSrc] = useState("jd");
  const { actorProfile, setActorProfile, selected } = props;

  const mappingTable = {
    0: "jd",
    1: "lm",
    2: "cr",
    3: "sel",
    4: "jlo",
    5: "bp",
  };

  useEffect(() => {
    setSrc(`/assets/${mappingTable[selected]}.mp4`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  return (
    <div
      className="profile-container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <video
        src={src}
        width="320"
        height="320"
        controls="controls"
        autoplay="true"
      />

      <button>
        <a href={src} download>
          Download
        </a>
      </button>

      <button
        onClick={() => {
          setActorProfile(!actorProfile);
        }}
      >
        Go Back
      </button>
    </div>
  );
};

export default Details;
