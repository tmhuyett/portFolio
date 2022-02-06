import Layout from "@components/Layout"
import PostList2 from "@components/PostList2"
import styles from "./index.module.css"
import getPosts from "@utils/getPosts"

const Index = ({ posts, title, description, ...props }) => {
  return (
    <div>
      <div id={styles.box}>
        <div id={styles.cont}>
          <Layout pageTitle={title} description={description}>
            <div className="nameBox">
              <h1 className={styles.title}>Todd Huyett</h1>
              <h2 className={styles.hhh}>Web Developer</h2>
              <p id={styles.ab}>
                Each of the portfolio items listed below—where
                applicable—contains a link to a simple frontend to demonstrate
                the implementation of the various technologies noted in its
                description. Each listing also contains a GitHub repository
                link.
              </p>
            </div>
            <main>
              <PostList2 posts={posts} />
            </main>
          </Layout>
        </div>
      </div>
    </div>
  )
}

export default Index

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)
  const posts = (context => {
    return getPosts(context)
  })(require.context("../posts", true, /\.md$/))

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
