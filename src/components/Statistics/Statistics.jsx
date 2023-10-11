import styles from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Statistics</h3>
      <div className={styles.resultContainer}>
      <p  className={styles.statCountGood}>
        <strong>Good:</strong> {good}
      </p>
      <p className={styles.statCountNeutral}>
        <strong>Neutral:</strong> {neutral}
      </p>
      <p className={styles.statCountBad}>
        <strong>Bad:</strong> {bad}
        </p>
        </div>
      <p>
        <strong className={styles.underline}>Total:</strong> {total}
      </p>
      <p>
        <span className={styles.underline}>Positive Feedback:</span>{' '}
        {Math.ceil(positivePercentage)}%
      </p>
    </div>
  );
};