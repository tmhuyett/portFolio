import Layout from "@components/Layout";
import PostList from "@components/PostList";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import Head from "next/head";

import getPosts from "@utils/getPosts";

const Index = ({ posts, title, description, ...props }) => {
  return (
    <>
      <Head>
        <link
          href="//db.onlinewebfonts.com/c/37b29158c68de167677fa4a3087d7188?family=Tiempos+Text+Regular"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <div id="cont"><Layout pageTitle={title} description={description}>
       
        <h1 className="title">Todd Huyett</h1>
        <h2>Web Developer</h2>

        <h3 className="description">Recent projects:</h3>
        <main>
          <PostList posts={posts} />
        </main>

        <h3>About:</h3>
        <p>
          Before getting into JavaScript, I taught English in various countries.
          I enjoy coding, Byzantine history, perfumery, squirrels, and
          linguistics. As a developer, I enjoy learning to use new frameworks
          and tools, which is how I spend most of my free time.{" "}
        </p>
      </Layout></div>
      <style jsx>{`
        .title {
          font-size: calc(30px + 0.5vw);
          padding-left: 20px;
          color: black;
        }
        h1 {
          padding-left: 20px;
          style: none;
        }
        h2 {
          padding-left: 22px;
          font-size: calc(18px + 0.3vw);

          style: bold;

          padding-top: 0;
        
          color: #4d4d4d;
        }
        h3 {
          padding-left: 20px;
          padding-bottom: 0;
          margin-bottom: 0;
        }

        p {
          padding-left: 20px;
          font-size: 16px;
          padding-bottom: 0;
          margin-bottom: 0;
          color: #4d4d4d;
        }
      `}</style>
    </>
  );
};

export default Index;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  const posts = ((context) => {
    return getPosts(context);
  })(require.context("../posts", true, /\.md$/));

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
