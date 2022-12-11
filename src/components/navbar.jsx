import styles from "../../styles/NavBar.module.css";


export default function NavBar() {
  return (
    <div className={styles.NavBar}>
      <img src={'/favicon.ico'} className={styles.logo} width={'45px'} height={'45px'}/>
      <div className={styles.LogoTitle}>SSS Proxima</div>
    </div>
  );
}
