import { useEffect, useRef } from "react";

// eslint-disable-next-line react/prop-types
export default function VideoPlayer({src,isPlaying}) {
    const ref = useRef(null);

    useEffect(() => {
        if (isPlaying) {
          ref.current.play();
        } else {
          ref.current.pause();
        }
      });
  return (
    <video src={src} ref={ref}/>
  )
}
