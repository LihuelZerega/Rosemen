import React, { useRef } from "react";

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div>
      <video ref={videoRef} src={src} controls className="rounded-md shadow-2xl"/>
    </div>
  );
};

export default VideoPlayer;
