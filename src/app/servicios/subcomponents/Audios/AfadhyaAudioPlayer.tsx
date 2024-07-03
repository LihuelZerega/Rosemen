import React from "react";

const AudioPlayer = () => {
  const audioUrl =
    "https://res.cloudinary.com/dys0jotat/video/upload/v1720018961/SPOT_AFADHYA_kvutgc.mp3";

  return (
    <div>
      <audio src={audioUrl} controls />
    </div>
  );
};

export default AudioPlayer;
