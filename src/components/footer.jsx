import styles from "../../styles/Footer.module.css"


export default function Footer() {
  const year = "2022";
  return (
    <div className={`${styles.footerWrapper} ${styles.noselect}`}>
        <div className={styles.footerBlock}>

          <div className={styles.footerTitleCard}>
            <div className={styles.logoSection}>
              <img src={'/logo.png'} className={styles.logo} width={'45px'} height={'45px'}/>
              <div className={styles.LogoTitle}>ProximaKube</div>
            </div>
            <div className={styles.titleContent}>
              <p>"The beautiful thing about learning is that nobody can take it away from you."</p>
            </div>
          </div>

          <div className={styles.footerNavigCard}>
            <div className="NavigLinks">
              <h2>Important Links</h2>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>

          <div className={styles.footerSubscribeCard}>
            <div className="Subscribe">
              <h2>Get Notification</h2>
              <input type="text" />
              <button>subscribe</button>
            </div>
            <div className="copyRight">
              <span>@{year} ProximaKube. All rights reserved.</span>
            </div>
          </div>
        </div>
    </div>
  );
}
