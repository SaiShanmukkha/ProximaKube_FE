import BlogPostPage from "../../components/blog-post-page";
import Head from 'next/head';

export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(`http://localhost:8000/api/posts/${context.params.slug}`)
  const post_data = await res.json()

  return { props: { post_data } }
}


export default function BlogPage({post_data}) {
 
  return (
    <>
      <Head>
        <title>SSS ProximaKube - {post_data.title}</title>
        <meta name="description" content={post_data.title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BlogPostPage post_data={post_data} />
    </>
  );
}

