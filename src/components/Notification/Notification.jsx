import styles from './Notification.module.css';

export const Notification = ({ message }) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{message}</p>
    </div>
  );
};