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
      <div id="box">
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
              <h3 id="abb">About:</h3>
              <p id="ab">
                Before learning to code, I taught English in various countries.
                As a developer, I enjoy learning to use new frameworks and
                tools, which is how I spend most of my free time.{" "}
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
                  Wesleyan University | Python Programming: A Concise
                  Introduction{" "}
                </a>
              </div>
              <div className="boxc">
                This course covered Python syntax and fundamentals.
              </div>
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
                  University of Michigan | Introduction to Structured Query
                  Language{" "}
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
                      src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/a4/7cd68a658840ddbb95c38cdd0bbc8e/aws-logo-icon-PNG-Transparent-Background.png?auto=format%2Ccompress&dpr=1&w=80&h=80"
                    />
                  </div>
                </Link>
              </div>
              <div className="boxb">
                <a href="https://coursera.org/share/3649cb857cf8c65d91b3ab22c78125c8">
                  Amazon Web Services | Modern Application Development with
                  Node.js on AWS{" "}
                </a>
              </div>
              <div className="boxc">
                Amazon fundamentals, Lambda, CloudFront, and API Gateway.
              </div>
            </div>

            <div className="q">
              <div className="boxa">
                <Link href={{ pathname: `www.google.com` }}>
                  <div>
                    <img
                      id="log"
                      src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/3a/37974779f7ad2a04626183c2f8951b/ustLogo.png?auto=format%2Ccompress&dpr=1&w=56px&h=56px&auto=format%2Ccompress&dpr=1&w=&h="
                    />
                  </div>
                </Link>
              </div>
              <div className="boxb">
                <a href="https://coursera.org/share/84297a36879c538af185f2ec97b6d6e8">
                  The Hong Kong University of Science and Technology |
                  Server-side Development with NodeJS, Express and MongoDB{" "}
                </a>
              </div>
              <div className="boxc">
                Server-side JavaScript and NoSQL development.
              </div>
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
              <div className="boxc">
                This program consisted of 3 Java courses and covered everything
                from fundamentals to unit testing.
              </div>
            </div>
          </Layout>
        </div>
      </div>
      <style jsx>{`
        .title {
          font-size: calc(30px + 0.5vw);
          padding-left: 40px;
          color: black;
        }
        #ab {
          padding-left: 40px;
          padding-bottom: 10px;
        }
        #about {
          padding-bottom: 20px;
        }

        #abb {
          margin-bottom: -20px;
        }

        #log {
          height: 50px;
        }

        #ab {
          margin-top: 40px;
        }
        h1 {
          padding-left: 40px;
        }
        h2 {
          padding-left: 42px;
          font-size: calc(18px + 0.3vw);

          padding-top: 0;
       
        }
        h3 {
          padding-left: 40px;
          padding-bottom: 0;
          margin-bottom: 0;
        }
        .description {
          padding-bottom: 15px;
        }
        p {
          padding-left: 20px;
          font-size: 16px;
          padding-bottom: 0;
          margin-bottom: 0;
     
        }
        a {
          font-family: "Baskerville Old Face";
        }

        #cont {
          max-width: 960px;
      
        }
        html,
        body {
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
