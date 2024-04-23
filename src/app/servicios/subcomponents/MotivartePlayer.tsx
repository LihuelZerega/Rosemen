import React from "react";

const AudioPlayer = () => {
  const audioUrl =
    "https://res.cloudinary.com/dszjgdktf/video/upload/v1713894950/Spot-Motivarte_luoj9n.mp3";

  return (
    <div>
      <audio src={audioUrl} controls />
    </div>
  );
};

export default AudioPlayer;
