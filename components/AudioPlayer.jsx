import { useEffect, useRef, useState } from 'react';
import styles from '../styles/AudioPlayer.module.css';
import AudioControls from './AudioControls';
import ProgressBar from './ProgressBar';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // References
  const audioRef = useRef(); // Audio element reference
  const progressBarRef = useRef(); // Progress bar ref
  const animationRef = useRef(); // Animation for progress while playing audio

  const changePlayerCurrentTime = () => {
    progressBarRef.current.style.setProperty(
      '--seek-before-width',
      `${(progressBarRef.current.value / duration) * 100}%`
    );
    setCurrentTime(+audioRef.current.currentTime);
  };

  const whilePlaying = () => {
    progressBarRef.current.value = audioRef.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const togglePlayPause = () => {
    setIsPlaying((state) => !state);

    if (!isPlaying) {
      audioRef.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioRef.current?.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const handleSetMetadata = () => {
    const seconds = +audioRef.current.duration;
    progressBarRef.current.max = seconds;
    setDuration(seconds);
  };

  const changeRange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
    changePlayerCurrentTime();
  };

  const backFifteen = () => timeTravel(-15);
  const forwardFifteen = () => timeTravel(15);

  const timeTravel = (newTime) => {
    progressBarRef.current.value = +progressBarRef.current.value + newTime;
    changeRange();
  };

  useEffect(() => {
    if (audioRef.current && audioRef.current.duration && progressBarRef.current)
      handleSetMetadata();
  }, []);

  useEffect(() => {
    if (currentTime === duration) {
      timeTravel(-duration);
      togglePlayPause();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTime]);

  return (
    <div className={styles.audioPlayer}>
      <AudioControls
        isPlaying={isPlaying}
        audioRef={audioRef}
        onBackFifteen={backFifteen}
        onForwardFifteen={forwardFifteen}
        onToogglePlayPause={togglePlayPause}
        onLoadedMetadata={handleSetMetadata}
      />

      <ProgressBar
        currentTime={currentTime}
        duration={duration}
        progressBarRef={progressBarRef}
        onChangeRange={changeRange}
      />
    </div>
  );
};

export default AudioPlayer;
