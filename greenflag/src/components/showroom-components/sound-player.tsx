import React, { useRef, useState, useEffect } from "react";
import LinearProgress from '@mui/material/LinearProgress';

interface Sound {
  waveType: string;
}

interface SoundPlayerProps {
  selectedSound: Sound;
}

const SoundPlayer: React.FC<SoundPlayerProps> = ({ selectedSound }) => {
  const [play, setPlay] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (play) {
        audioRef.current.pause();
        setPlay(false);
      } else {
        audioRef.current.play();
        setPlay(true);
      }
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      console.log(`Time update: currentTime = ${currentTime}`);
      setCurrentTime(currentTime);
      setProgress(normalize(currentTime, duration));
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      console.log('Loaded metadata event fired');
      console.log(`Audio duration: ${audioRef.current.duration}`);
      if (audioRef.current.duration) {
        setDuration(audioRef.current.duration);
        console.log(`Set duration: ${audioRef.current.duration}`);
      } else {
        console.error('Audio duration is not available at this point');
      }
    } else {
      console.error('Audio ref is not set');
    }
  };
  
  const handleEnded = () => {
    console.log('Audio ended');
    setCurrentTime(duration);
    setProgress(100);
    setPlay(false);
  };

  const normalize = (value: number, max: number) => {
    if (max === 0) return 0;
    const result = (value / max) * 100;
    console.log(`Normalize: value = ${value}, max = ${max}, result = ${result}`);
    return result > 100 ? 100 : result;
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      console.log('Adding event listeners');
      audio.addEventListener("timeupdate", handleTimeUpdate);
      audio.addEventListener("loadedmetadata", handleLoadedMetadata);
      audio.addEventListener("ended", handleEnded);
      return () => {
        console.log('Removing event listeners');
        audio.removeEventListener("timeupdate", handleTimeUpdate);
        audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
        audio.removeEventListener("ended", handleEnded);
      };
    }
  }, []);

 
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
    }
  }, [selectedSound]);
  useEffect(() => {
    setProgress(normalize(currentTime, duration));
  }, [currentTime]);

  console.log(`Formatted progress time: ${formatTime(progress)}`);
  console.log(`Progress value: ${progress}`);
  console.log(`Current Time: ${currentTime}, Duration: ${duration}`);

  return (
    <div className="items-center justify-center mb-3 bg-black p-3">
      <div className="flex-col text-center">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-white">{formatTime(currentTime)}</span>
          <div className="flex grow">
            <LinearProgress variant="determinate"
              sx={{ width: '100%' }}
              value={progress}
              
            />
          </div>
          <span className="text-white">{formatTime(duration)}</span>
        </div>

        <div className="flex items-center justify-center mr-4 gap-4 rounded-full">
          <div className="filter invert">
            <button onClick={toggleAudio} type="button">
              {!play ? (
                <img src="/player-play.png" className="h-12 w-12" aria-hidden="true" />
              ) : (
                <img src="/player-pause.png" className="h-12 w-12" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
        <audio ref={audioRef} key={selectedSound.waveType} src={`/audio/${selectedSound.waveType}`} />
      </div>
    </div>
  );
};

export default SoundPlayer;
