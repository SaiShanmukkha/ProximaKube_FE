import PostCard from "../components/post-card";
import styles from "../../styles/Home.module.css";

export default function BlogPostGrid({posts, router}) {
  return (
      <main className={styles.BlogPostGrid}>
        <div className={``}>
          {posts.map((post)=>{
            return <PostCard key={post.id} post_data={post} router={router}/>
          })}
          {posts.map((post)=>{
            return <PostCard key={post.id} post_data={post} router={router}/>
          })}
        </div>
      </main>
  );
}
