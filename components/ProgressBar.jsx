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
      <div className={styles.currentTime}>{calculateTime(currentTime)}</div>

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
      <div className={styles.duration}>{calculateTime(duration)}</div>
    </div>
  );
};

export default ProgressBar;
