import DrumButtons from './DrumButtons';
import { drumClip } from './types';


  const drumArrs: drumClip[] = [
    {
      keyCode: "81",
      text: "Q",
      src: "/audio/Q.mp3"
    },
    {
      keyCode: "87",
      text: "W",
      src: "/audio/W.mp3"
    },
    {
      keyCode: "69",
      text: "E",
      src: "/audio/E.mp3"
    },
    {
      keyCode: "65",
      text: "A",
      src: "/audio/A.mp3"
    },
    {
      keyCode: "83",
      text: "S",
      src: "/audio/S.mp3"
    },
    {
      keyCode: "68",
      text: "D",
      src: "/audio/D.mp3"
    },
    {
      keyCode: "90",
      text: "Z",
      src: "/audio/Z.mp3"
    },
    {
      keyCode: "88",
      text: "X",
      src: "/audio/X.mp3"
    },
    {
      keyCode: "67",
      text: "C",
      src: "/audio/C.mp3"
    }
  ];
  function App() {
  const playKeyboard = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const textToPlay = drumArrs.find(
      (textToPlay) => textToPlay.text === e.key.toUpperCase()
    );
    if(!textToPlay){
      return
    }

      (document.getElementById(textToPlay.text) as HTMLAudioElement).play();
      document.getElementById("display")!.innerText = textToPlay.text;
      
      
    }
  return (
    <>
          <div id="drum-machine" onKeyDown={playKeyboard}>
       <div id="display" className='display'>FCC Drum Machine</div>
       <div className="layers">
        {drumArrs.map((drum) => 
          <DrumButtons DrumClips={drum} key={drum.text}/>
          )}
      </div>
    </div>
    </>
  )
}

export default App