import styles from "../../styles/Footer.module.css"


export default function Footer() {
  return (
    <div className={styles.footerWrapper}>
        <hr/>
        <div className={styles.footerContent}>
            <span className={styles.mainTitle}>SSS Proxima</span>
            <span>@2022 All rights reserved.</span>
        </div>
    </div>
  );
}
