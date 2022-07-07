export const calculateTime = (secs) => {
  const mins = Math.floor(secs / 60);
  const minToReturn = mins < 10 ? `0${mins}` : mins;
  const seconds = Math.floor(secs % 60);
  const secsToReturn = seconds < 10 ? `0${seconds}` : seconds;
  return `${minToReturn}:${secsToReturn}`;
};
