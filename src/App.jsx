import styles from "./App.module.css";

export function App() {
  return (
    <div className={styles.container}>
      <img className={styles.image} src="avatar-jessica.jpeg" alt="profile" />
      <div className={styles.info}>
        <h1 className={styles.name}>Jessica Randall</h1>
        <p className={styles.location}>London, United Kingdom</p>
      </div>
      <p className={styles.description}>
        &quot;Front-end developer and avid reader.&quot;
      </p>
      <ul className={styles.links}>
        <li>GitHub</li>
        <li>Frontend Mentor</li>
        <li>LinkedIn</li>
        <li>Twitter</li>
        <li>Instagram</li>
      </ul>
    </div>
  );
}
