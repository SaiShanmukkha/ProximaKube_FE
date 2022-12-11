import styles from "../../styles/Home.module.css";

export default function PostCard({ post_data, router }) {
  return (
    <div className={`${styles.borderAnimate}`}>
      <div className={styles.postCard}>
        <img
          className={styles.postImage}
          src={post_data.image}
          alt="Blog-Pic"
        />
        <div className={styles.postCardBody}>
          <h3>{post_data.title}</h3>
          <p className={styles.postDate}>September 16, 2022</p>
          <p className={styles.postDescription}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Praesentium, repellendus?
          </p>
          <div className={styles.postTags}>
            <span className={styles.aws}>#aws</span>
            <span className={styles.python}>#python</span>
            <span className={styles.boto3}>#boto3</span>
            <span className={styles.react}>#react</span>
          </div>
          <div className={styles.postAction}>
            <p className={styles.postReadTime}>88 Minute Read</p>
            <button
              className={styles.postReadbtn}
              onClick={() => {
                router.push({
                  pathname: `/posts/[post_slug]`,
                  query: { post_slug : post_data.slug },
                });
              }}
            >
              Read Article &#8594;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
