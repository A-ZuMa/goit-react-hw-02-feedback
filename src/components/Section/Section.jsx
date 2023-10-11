import styles from './Section.module.css';

export const Section = ({ title, children }) => (
  <section className={styles.card}>
    <h2 className={styles.mainText}>{title}</h2>
    {children}
  </section>
);