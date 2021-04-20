import Head from "next/head";

import getPosts from "@utils/getPosts";

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
      <div id="cont">
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
          <a href="https://sharp-swartz-db05e5.netlify.app/">Portfolio</a>
        </p>
        <br></br>
        <p>
          Web developer with a particular interest in the creation of custom
          tools for education, e-commerce, and a variety of other applications.
        </p>
        <h3>Skills</h3>
        <ul>
          <li>JavaScript (React, Vue, and Vanilla JS)</li>
          <li>Curriculum development</li>
          <li>Language pedagogy</li>
          <li>Adobe Photoshop</li>
          <li>Adobe Illustrator</li>
          <li>Microsoft Office</li>
        </ul>

        <h3>Education</h3>
        <p>George Mason University | B.A. Economics | 2008</p>
        <ul className="list">
          <li>Participated in two Spanish-language theater productions</li>
          <li>GPA of 3.2</li>
        </ul>

        <p>International House Prague | CELTA | 2008</p>
        <ul className="list">
          <li>Certified to teach English as a foreign language</li>
        </ul>

        <h3>Experience</h3>
        <p>
          Target Training Centre (Abu Dhabi) | English Instructor | 2009 -2011
        </p>
        <ul className="list">
          <li>
            Taught English to multinational groups of adult and adolescent
            students
          </li>
          <li>
            Handled curriculum development and standardized testing for the
            education center
          </li>
        </ul>
        <h3>References</h3>
        <p id="ref1">
        Tom Giles | (804) 921-5593 | tgiles@kforce.com</p>
        <p id="ref2">
        Wayne Gray | (703) 376-1474 | waynegray82@gmail.com
        </p>
      </div>
      <style jsx>{`
        .title {
          font-size: calc(30px + 0.5vw);
          padding-left: 20px;
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

          font-size: 14px;
        }

        h3 {
          padding-left: 20px;
          padding-bottom: 0;
          margin-bottom: 0;
        }
        hr {
          color: #f0f0f0;
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

        #cont {
          margin: 2%;
          padding-top: 1%;
        }
      `}</style>
    </>
  );
};

export default Resume;

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
