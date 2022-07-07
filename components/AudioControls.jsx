import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { FaPause, FaPlay } from 'react-icons/fa';
import styles from '../styles/AudioPlayer.module.css';

const AudioControls = ({
  audioRef,
  isPlaying,
  onToogglePlayPause,
  onBackFifteen,
  onForwardFifteen,
}) => {
  return (
    <div className={styles.controls}>
      <audio
        ref={audioRef}
        src='https://morexlusive.com/wp-content/uploads/2021/07/Dean_Lewis_-_Be_Alright.mp3'
        preload='metadata'
      ></audio>

      {/* Play/Pause, Forward and Backward Buttons */}
      <button
        type='button'
        className={styles.forwardBackward}
        onClick={onBackFifteen}
      >
        <BsArrowLeftShort />
        15
      </button>

      <button
        type='button'
        onClick={onToogglePlayPause}
        className={styles.playPause}
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>

      <button
        type='button'
        className={styles.forwardBackward}
        onClick={onForwardFifteen}
      >
        15
        <BsArrowRightShort />
      </button>
    </div>
  );
};

export default AudioControls;
