import styles from "../../styles/NavBar.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineClear } from "react-icons/md";

export default function NavBar({router}) {
  const onclickAction = () => {
    router.push({
      pathname: `/`,
      query: {},
    });
  };

  return (
    <div className={styles.NavBar} onClick={onclickAction}>
      <div className={styles.NavBarBlock}>
        <div className={styles.logoSection}>
          <img src={'/logo.png'} className={styles.logo} width={'45px'} height={'45px'}/>
          <div className={styles.LogoTitle}>ProximaKube</div>
        </div>

        <div className={styles.searchBarBlock}>
          <div className={styles.searchBar}>
            <AiOutlineSearch className={styles.searchIcon} />
            <input className={`${styles.searchInput}`} type="text" placeholder="Search here" />
            <MdOutlineClear />
          </div>
        </div>

        <div className={`${styles.NavMenu} ${styles.noselect}`}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
