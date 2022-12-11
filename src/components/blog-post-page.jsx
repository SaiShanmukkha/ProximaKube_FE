import styles from "../../styles/BlogPage.module.css";
import md from 'markdown-it';


export default function BlogPostPage({post_data}) {
  return (
    <>
      <div className={styles.BlogReadPage}>

        <div className={styles.blogPostHeadBlock}>
          <div className={styles.blogTitle}>
            {post_data.title}
          </div>
          <div className={styles.blogPostPubDate}>{post_data.published_date}</div>
          <div className={styles.postTags}>
            <span className={styles.aws}>#aws</span>
            <span className={styles.python}>#python</span>
            <span className={styles.boto3}>#boto3</span>
            <span className={styles.react}>#react</span>
          </div>
        </div>

        <div className={styles.postImageBlock}>
          <img
            className={styles.postImage}
            src={post_data.image}
            alt="Blog-Pic"
          />
        </div>

        <div className={styles.BlogPostContent}>
            <div dangerouslySetInnerHTML={{ __html: md().render(post_data.content) }} />
        </div>
      </div>
    </>
  );
}
