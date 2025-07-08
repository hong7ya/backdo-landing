import playSampleMP4 from "../assets/playSample.mp4";
import playSampleWEBM from "../assets/playSample.webm";

export default function Video() {
  return (
    <video
      width="938"
      height="608"
      controls
      autoPlay
      loop
      muted
      playsInline
    >
      <source
        src={playSampleWEBM}
        type="video/webm"
      />
      <source
        src={playSampleMP4}
        type="video/mp4"
      />
    </video>
  );
}
