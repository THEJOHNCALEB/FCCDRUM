import { drumClip } from "./types";

interface DrumProps {
    DrumClips: drumClip 
}

const DrumButtons = ({DrumClips}: DrumProps) => {


    const playDrum = (clip: drumClip) => {
     (document.getElementById(clip.text) as HTMLAudioElement).play();
        document.getElementById("display")!.innerText = clip.text;
      }

  return (
        <>
          <button onClick={() => playDrum(DrumClips)} id={`drum-${DrumClips.text}`} className="drum-pad">
            <audio className="clip" id={DrumClips.text} src={DrumClips.src}>
              Your browser does not support the audio element.
            </audio>
            {DrumClips.text}
          </button>
        </>
      );
}

export default DrumButtons