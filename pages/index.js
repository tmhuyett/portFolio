import Layout from "@components/Layout"
import PostList from "@components/PostList"
import PostList2 from "@components/PostList2"
import Link from "next/link"
import { SocialIcon } from "react-social-icons"
import Head from "next/head"
import OpenSource from "@components/OpenSource"

import getPosts from "@utils/getPosts"

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
      <div id="cont">
        <Layout pageTitle={title} description={description}>
          <h1 className="title">Todd Huyett</h1>
          <h2>Web Developer</h2>

          <h3 className="description">Recent projects:</h3>
          <main>
            <PostList2 posts={posts} />
          </main>
          {/* <h3 className="description">Open-source contributions:</h3> */}
          {/* <main>
          <OpenSource />
        </main> */}
          <div id="about">
            <h3>About:</h3>
            <p>
              Before getting into JavaScript, I taught English in various
              countries. I enjoy coding, Byzantine history, perfumery,
              squirrels, and linguistics. As a developer, I enjoy learning to
              use new frameworks and tools, which is how I spend most of my free
              time.{" "}
            </p>
            <h3 id="ab">Professional Certifications:</h3>
          </div>
          <div className="q">
            <div className="boxa">
              <Link href={{ pathname: `www.google.com` }}>
                <div>
                  <img
                    id="log"
                    src="https://www.wesleyan.edu/communications/styleguide/style_guide/images/WU_Identity_monogram_hex_red.png"
                  />
                </div>
              </Link>
            </div>
            <div className="boxb">
              <a href="http://coursera.org/verify/AAU3RUGGRGQC">
                Wesleyan University | Python Programming: A Concise Introduction{" "}
              </a>
            </div>
            <div className="boxc">This course covered Python syntax and fundamentals.</div>
          </div>
          <div className="q">
            <div className="boxa">
              <Link href={{ pathname: `www.google.com` }}>
                <div>
                  <img
                    id="log"
                    src="https://media-exp1.licdn.com/dms/image/C4E0BAQFGfERBPGurCg/company-logo_100_100/0/1519856309184?e=1645660800&v=beta&t=ruaURv966Uh9wsWwmt6-BFZnpxmlZP7D93P7JGwRCGQ"
                  />
                </div>
              </Link>
            </div>
          <div className="boxb">
              <a href="http://coursera.org/verify/WV6JGCEM4W2U">
                University of Michigan | Introduction to Structured Query Language{" "}
              </a>
            </div>
            <div className="boxc">SQL fundamentals and MySQL.</div>
          </div>

          <div className="q">
            <div className="boxa">
              <Link href={{ pathname: `www.google.com` }}>
                <div>
                  <img
                    id="log"
                    src="https://www.saashub.com/images/app/service_logos/11/157a3bcc54ad/large.png?1531527862"
                  />
                </div>
              </Link>
            </div>
            <div className="boxb">
              <a href="https://graduation.udacity.com/confirm/PJKN6WEK/">
                Udacity | Java Programming Nanodegree{" "}
              </a>
            </div>
            <div className="boxc">This program consisted of 3 Java courses and covered everything from fundamentals to unit testing.</div>
          </div>
        </Layout>
      </div>
      <style jsx>{`
        .title {
          font-size: calc(30px + 0.5vw);
          padding-left: 20px;
          color: black;
        }

        #about {
          padding-bottom: 30px;
        }

        #log {
          height: 50px;
        }

        #ab {
          margin-top: 40px;
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
        a {
          font-size: calc(16px + 0.5vw);
          font-family: Baskerville Old Face;
          margin-left: 0px;
          style: bold;
        }

        .z {
          margin-left: 0;
          padding-top: 10px;
        }
        #cont {
          max-width: 960px;
          padding-bottom: 50px;
        }
        html,
        body {
          background-color: rgb(172, 171, 171);
          max-width: 960px;
        }
      `}</style>
    </>
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
