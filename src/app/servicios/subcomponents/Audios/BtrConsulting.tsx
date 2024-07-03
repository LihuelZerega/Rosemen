import React from "react";

const AudioPlayer = () => {
  const audioUrl =
    "https://res.cloudinary.com/dys0jotat/video/upload/v1720018966/SPOT_BTR_CONSULTING_oqxwnf.mp3";

  return (
    <div>
      <audio src={audioUrl} controls />
    </div>
  );
};

export default AudioPlayer;
