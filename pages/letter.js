import Head from "next/head";

import getPosts from "@utils/getPosts";

const Letter = ({ posts, title, description, ...props }) => {
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
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <p>4/22/21</p>
        <p>To the team:</p>

        <p>
          I am writing in regards to your front-end developer position. I noted
          that you all are looking for someone familiar with React.js, CSS
          fundamentals, and a number of other tools. I have experience with all
          of the tools listed, examples of which can be seen in my portfolio
          here: https://sharp-swartz-db05e5.netlify.app/.{" "}
        </p>
        <p>
          Regarding myself, I am a web developer and a former English teacher.
          My chief intellectual interest has always been natural languages
          (Greek, Russian, and Spanish), and more recently, I have turned my
          attention towards the languages of the internet . All of those years
          studying and teaching natural languages were merely preparation for a
          career in web development. While still young in my career, I have
          already acquired a number of valuable skills, both in client-side and
          server-side programming. I have worked with a number of APIs,
          including various payment and content-management systems. I have even
          dabbled in machine-learning libraries, such as TensorFlow.js. I really
          enjoy making custom tools for websites, such as a bird classifier app
          that I made for a nature blog.
        </p>
        <p>
          I hope to have the opportunity to interview and learn more about your
          company.{" "}
        </p>
        <p>
          Sincerely,
          <br></br>
          <br></br>
          Todd Huyett
          <br></br>
          <br></br>
          toddhuyett@gmail.com<br></br>
          703-635-9598
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
          margin: 0%;
          padding-top: 0%;
          margin-left: 3%;
          margin-bottom: 100px;
        }

        @media only screen and (max-width: 600px) {
          #cont {
            margin: 0%;
            padding-top: 0%;
            margin-left: 0%;
            margin-bottom: 100px;
          }
        }
      `}</style>
    </>
  );
};

export default Letter;

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
