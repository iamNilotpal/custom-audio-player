import styles from '../styles/AudioPlayer.module.css';
import { calculateTime } from '../utils';

const ProgressBar = ({
  duration,
  currentTime,
  progressBarRef,
  onChangeRange,
}) => {
  return (
    <div className={styles.times}>
      {/* Current Time */}
      <p className={styles.currentTime}>{calculateTime(currentTime)}</p>

      {/* Progress Bar */}
      <input
        type='range'
        name='progressBar'
        className={styles.progressBar}
        defaultValue='0'
        onChange={onChangeRange}
        ref={progressBarRef}
      />

      {/* Duration */}
      <p className={styles.duration}>{calculateTime(duration)}</p>
    </div>
  );
};

export default ProgressBar;
