import styles from "../../styles/NavBar.module.css";

export default function NavBar({router}) {
  const onclickAction = () => {
    router.push({
      pathname: `/`,
      query: {},
    });
  };

  return (
    <div className={styles.NavBar} onClick={onclickAction}>
      <img src={'/logo.png'} className={styles.logo} width={'45px'} height={'45px'}/>
      <div className={styles.LogoTitle}>ProximaKube</div>
    </div>
  );
}
