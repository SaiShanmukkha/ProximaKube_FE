import styles from "../../styles/BlogPage.module.css";
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark as colorTheme } from "react-syntax-highlighter/dist/cjs/styles/prism";

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
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <SyntaxHighlighter
                      children={String(children).replace(/\n$/, "")}
                      language={match[1]}
                      style={colorTheme}
                      {...props}
                    />
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
              className={styles.reactMarkDown}
              children={post_data.content}
            />
        </div>
      </div>
    </>
  );
}
