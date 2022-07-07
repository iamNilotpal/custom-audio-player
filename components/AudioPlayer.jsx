import { useState } from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { FaPause, FaPlay } from 'react-icons/fa';
import styles from '../styles/AudioPlayer.module.css';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={styles.audioPlayer}>
      <div className={styles.controls}>
        <audio
          src='https://legitmuzic.com/wp-content/uploads/2022/03/Dean_Lewis_-_Hurtless_legitmuzic.com.mp3'
          preload='metadata'
        ></audio>

        {/* Play/Pause, Forward and Backward Buttons */}
        <button type='button' className={styles.forwardBackward}>
          <BsArrowLeftShort />
          10
        </button>
        <button
          type='button'
          onClick={() => setIsPlaying(!isPlaying)}
          className={styles.playPause}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button type='button' className={styles.forwardBackward}>
          <BsArrowRightShort />
          10
        </button>
      </div>

      <div className={styles.times}>
        {/* Current Time */}
        <div className={styles.currentTime}>0:00</div>

        {/* Progress Bar */}
        <div>
          <input type='range' name='progressBar' />
        </div>

        {/* Duration */}
        <div className={styles.duration}>3:40</div>
      </div>
    </div>
  );
};

export default AudioPlayer;
