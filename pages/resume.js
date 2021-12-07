import Head from "next/head"

import getPosts from "@utils/getPosts"

const Resume = ({ posts, title, description, ...props }) => {
  return (
    <>
      <Head>
        <link
          href="//db.onlinewebfonts.com/c/37b29158c68de167677fa4a3087d7188?family=Tiempos+Text+Regular"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <div id="background">
        <div id="cont2">
          <h1 className="title">Todd Huyett</h1>
          <h2>Web Developer</h2>
          <p>
            703-635-9598 <span>&nbsp;|&nbsp;</span>toddhuyett@gmail.com
          </p>
          <p id="links">
            <a href="https://www.linkedin.com/in/todd-huyett-2596a892/">
              LinkedIn
            </a>
            <span>&nbsp;|&nbsp;</span>
            <a href="https://github.com/prokopious">GitHub</a>
            <span>&nbsp;|&nbsp;</span>
            <a href="https://toddhuyett.com/">Portfolio</a>
          </p>
          <br></br>
          <p>Natural-language and computer specialist.</p>
          <h3>Skills</h3>
          <ul>
            <div>IT:</div>
            <br></br>

            <li>JavaScript, Java, HTML, CSS, TypeScript</li>
            <li>GraphQL, MySQL, SQL, Git, GitHub</li>
            <li>Spyder, Python</li>
            <li>Spring Boot, Maven, JUnit, IntelliJ, Heroku, Vercel</li>
            <li>Netlify, React (Next.js, Gatsby.js), Visual Studio Code</li>
            <li>
              <b>AWS:</b> Amplify, AppSync, Cognito, DynamoDB, IAM, API Gateway
            </li>
            <br></br>
            <div>Other:</div>
            <br></br>

            <li>Curriculum development</li>
            <li>Language pedagogy</li>
            <li>Adobe Photoshop, Illustrator, Microsoft Office</li>
            <li>Language competence in Spanish and Russian</li>
          </ul>
          <hr></hr>
          <h3>Education</h3>
          <p>George Mason University | B.A. Economics | 2008</p>
          <ul className="list">
            <li>-Participated in two Spanish-language theater productions</li>
          </ul>

          <p>
            Udacity |{" "}
            <a href="https://graduation.udacity.com/confirm/PJKN6WEK/">
              Java Programming Nanodegree
            </a>{" "}
            | 2021
          </p>
          <ul className="list">
            <li>
              Studied Java programming, development, deployment, and unit
              testing
            </li>
          </ul>
          <p>
            University of Michigan |{" "}
            <a href="http://coursera.org/verify/WV6JGCEM4W2U">
              Introduction to Structured Query Language
            </a>{" "}
            | 2021
          </p>
          <ul className="list">
            <li>SQL and MySQL</li>
          </ul>
          <p>
            Wesleyan University |{" "}
            <a href="http://coursera.org/verify/AAU3RUGGRGQC">
              Python Programming: A Concise Introduction
            </a>{" "}
            | 2021
          </p>
          <ul className="list">
            <li>Python syntax and development</li>
          </ul>
          <p>
            The Hong Kong University of Science and Technology |{" "}
            <a href="http://coursera.org/verify/AAU3RUGGRGQC">
              Server-side Development with NodeJS, Express and MongoDB
            </a>{" "}
            | 2021
          </p>
          <ul className="list">
            <li>Server-side JavaScript and NoSQL development</li>
          </ul>

          <p>International House Prague | CELTA | 2008</p>
          <ul className="list">
            <li>-Certified to teach English as a foreign language</li>
          </ul>

          <hr></hr>

          <h3>Experience</h3>
          <p>
            {" "}
            <a href="https://www.hanoverwebstudios.com/">
              Hanover Web Studios, Inc.
            </a>{" "}
            | Web Developer | 2020 - present
          </p>
          <ul className="list">
            <li>
              -I currently build cloud-based content-management systems, digital
              storefronts, and checkout flows for e-commerce websites
            </li>
          </ul>
          <p>
            Target Training Centre (Abu Dhabi) | English Instructor | 2009 -2011
          </p>
          <ul className="list">
            <li>
              -Taught English to multinational groups of adult and adolescent
              students
            </li>
            <li>
              -Handled curriculum development and standardized testing for the
              education center
            </li>
          </ul>
          <hr></hr>
          <h3>Other</h3>
          <p>I enjoy coding, linguistics, history, and classical music.</p>
        </div>
      </div>
      <style jsx>{`
        .title {
          font-size: calc(30px + 0.5vw);

          color: black;
          padding-top: 40px;
        }
        h1 {
          padding-left: 20px;
          style: none;
          padding-bottom: 0;
          margin-bottom: -5px;
        }

        a {
          padding-top: 0;
          margin-top: 5px;
        }
        #ref1 {
          padding-bottom: 0;
          margin-bottom: 0;
        }
        #ref2 {
          padding-top: 0;
          margin-top: 0;
        }

        #links {
          padding-top: 5px;
          margin-top: 0;
        }
        h2 {
          padding-left: 22px;
          font-size: calc(18px + 0.3vw);

          style: bold;

          padding-top: 0;
          padding-bottom: 0;
          margin-bottom: 0;
          margin-top: 0;

          color: #4d4d4d;
        }

        .list {
          padding-top: 0;
          margin-top: 5px;
          list-style-type: none;
          font-size: 14px;
          font-weight: bold;
        }

        h3 {
          padding-left: 20px;
          padding-bottom: 0;
          margin-bottom: 0;
        }
        hr {
          color: #f0f0f0;
        }
        ul {
          padding-left: 2.5em;
        }
        p {
          padding-left: 20px;
          font-size: 18px;
          padding-bottom: 0;
          margin-bottom: 0;
          color: #4d4d4d;
        }
        #details {
          font-size: 14px;
          color: black;
          margin-top: 0;
          padding-top: 0;
        }

        #cont2 {
          margin: 0%;
          padding-top: 0%;
          margin-left: 3%;

          padding-bottom: 100px;
          padding-right: 30px;
          padding-left: 0;
          margin-top: 0;
        }

        @media only screen and (max-width: 600px) {
          #cont {
            margin: 0%;
            padding-top: 0%;
            margin-left: 0%;
            margin-bottom: 100px;
          }
        }

        h1,
        h2,
        h3,
        h4,
        html,
        p {
          padding-left: 0;
        }

        h1 {
          margin-top: 0;
        }
        *,
        html,
        body {
        }

        #background {
          background-color: white;
        }
      `}</style>
    </>
  )
}

export default Resume

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
