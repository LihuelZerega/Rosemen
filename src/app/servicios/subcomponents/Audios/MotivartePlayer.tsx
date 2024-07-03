import React from "react";

const AudioPlayer = () => {
  const audioUrl =
    "https://res.cloudinary.com/dys0jotat/video/upload/v1720019010/Spot_Motivarte_1_rr0joj.wav";

  return (
    <div>
      <audio src={audioUrl} controls />
    </div>
  );
};

export default AudioPlayer;
