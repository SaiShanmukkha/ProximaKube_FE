import Head from "next/head";
import { useRouter } from "next/router";

import BlogPostGrid from '../components/blog-post-grid.jsx'
import styles from "../../styles/Home.module.css";

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:8000/api/posts`)
  const data = await res.json()
  console.log(data);
  // Pass data to the page via props
  return { props: { data } }
}

export default function Index(props) {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>SSS Proximakube - Home</title>
        <meta name="description" content="Proxima-Kube blogs to share knowledge about software" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <BlogPostGrid posts={props.data} router={router} />
      </div>
    </>
  );
}
