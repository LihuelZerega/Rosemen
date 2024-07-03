import React from "react";

const AudioPlayer = () => {
  const audioUrl =
    "https://res.cloudinary.com/dys0jotat/video/upload/v1720018969/Spot_Grafa_70_1_emc0gv.mp3";

  return (
    <div>
      <audio src={audioUrl} controls />
    </div>
  );
};

export default AudioPlayer;
