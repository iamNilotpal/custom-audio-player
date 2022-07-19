import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { FaPause, FaPlay } from 'react-icons/fa';
import styles from '../styles/AudioPlayer.module.css';

const AudioControls = ({
  audioRef,
  isPlaying,
  onToogglePlayPause,
  onBackFifteen,
  onForwardFifteen,
  onLoadedMetadata,
}) => {
  return (
    <div className={styles.controls}>
      <audio
        ref={audioRef}
        src='https://www.soundboard.com/mediafiles/mz/Mzg1ODMxNTIzMzg1ODM3_JzthsfvUY24.MP3'
        preload='metadata'
        onLoadedMetadata={onLoadedMetadata}
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
