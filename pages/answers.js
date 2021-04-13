import Head from "next/head";

import getPosts from "@utils/getPosts";

const Answers = ({ posts, title, description, ...props }) => {
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

        <h1>Todd Huyett</h1>
        <br></br>
        <h2>
          Answers to Questions Concerning the <i>Associate</i> Position with
          Keybridge Web:
        </h2>
        <br></br>

        <br></br>

        <h3>1. Why do you think that you are a good fit for Keybridge Web?</h3>
        <p>
          <em>
            This is a new career for me. One of the hardest parts about this
            move is getting an opportunity to start. This role is designed for
            that. I am confident that I will quickly grow in my skills based on
            experience, coaching, and continuous learning. I also am aware that
            you would be making an investment in me, and I will return that in
            loyalty, results, and being a good team player for the long term. I
            have been educating myself in web development and furthered this by
            developing some basic websites. I have also sought coaching and
            mentoring from friends who are in the field. This opportunity would
            allow me to realize this big move.
          </em>
        </p>
        <h3>
          2. Assuming we decide to move forward with your application, how soon
          would you be available for an in-person interview?
        </h3>
        <p>
          <em>Right away at your convenience, by phone, in person, or both.</em>
        </p>
        <h3>
          3. If we decided to hire you, when would you be available to begin
          working here? we were to check your references (which we always do),
          what will your past employers tell us are your 3 greatest strengths?
        </h3>
        <p>
          <em>
            While it is hard to predict what my references will tell you,
            they'll perhaps mention that I love to study and I'm creative—that's
            at least what I hope they'll say. Some people have also said that
            I'm a kind person.
          </em>
        </p>
        <h3>
          4. If we were to check your references (which we always do), what will
          your past employers tell us are the 3 areas that you need to
          strengthen. We’re looking for honest answers and real weaknesses.
          Please don’t tell us that you work too hard.{" "}
        </h3>
        <p>
          <em>
            While taking my CELTA course in preparation for a teaching career, I
            was told that I was "a bit disorganized" but that I would
            nonetheless be an effective teacher with the right amount of
            experience. I have done woodworking and construction jobs over the
            years, and organization could be a problem there too. I eventually
            learned to start the day a bit early and have my tools in order. It
            made for a better day overall and I could be a more effective member
            of the crew.
          </em>
        </p>
        <h3>
          5. Tell us about a time when you succeeded and others failed. What was
          your secret?
        </h3>
        <p>
          <em>
            People frequently fail in web development because they give up. I'm
            insanely focused and have a huge capacity for study, which I have
            applied in music and nautural languages in the past. The same is
            true now as I start a new career. I'm not the smartest person out
            there, but I can concentrate for long periods of time. People say
            that I'm "disciplined" in my studies, but it's really just something
            I do naturally without having to force it. In other words, I code
            all day for fun because I enjoy it.
          </em>
        </p>
        <h3>
          6. Tell us about a time when you failed and others succeeded. Given a
          second chance, what would you do differently?
        </h3>
        <p>
          <em>
            I went to Prague to be certified as an English teacher. While I
            ultimately passed the course, other students performed better simply
            because they followed the teacher's instructions more closely, which
            is what I'd do if I took the course again.
          </em>
        </p>
        <h3>7. Where do you see yourself in 5 years?</h3>
        <p>
          <em>
            I don't see myself using a particular programming language or tool
            (it's too difficult to predict the next big thing). I do see myself
            making websites, apps, and software. They could be written in
            JavaScript, Python, or a language that doesn't exist yet.
          </em>
        </p>
        <h3>8. What was your GPA in college - overall and in your major?</h3>
        <p>
          <em>
            My GPA was 3.2 overall. My minor, Spanish, was higher. Languages are
            my strength, which is why I took up JavaScript. The GPA in my major
            wasn't as high, so I probably should have studied a language.
          </em>
        </p>
        <h3>9. What are you looking for in a job opportunity?</h3>
        <p>
          <em>
            Above all, I want to do something that's intellectually stimulating.
            I'd like to learn from more experienced developers.
          </em>
        </p>
        <h3>
          10. Please list any previous jobs you've held that were not included
          on your resume.
        </h3>
        <p>
          <em>
            For the last several years I have worked in fine woodworking. After
            I stopped teaching, it took me a number of years to decide on a new
            career.
          </em>
        </p>
        <h3>11. Please tell us three random things about yourself.</h3>
        <p>
          <em>
            I like to roll fresh pasta the old-fashioned way and finish it in
            stainless steel with lemon zest, garlic, Parmesan, and olive oil. I
            have lived and worked in Russia and the Near East. I like to study
            Spanish, Greek, and Russian.
          </em>
        </p>
        <h3>
          12. If you have a personal website that you’d like to share with us,
          please list it.
        </h3>
        <p>
          <em>
            My portfolio can be found here. It was made with readability in
            mind:
          </em>
          <br></br> https://sharp-swartz-db05e5.netlify.app/ <br></br>
          <br></br>
          <em>
            These very answers can be found on the same site (I used it to
            generate the PDF):
          </em>
          <br></br> https://sharp-swartz-db05e5.netlify.app/answers
        </p>
        <h3>
          13. Is there anything else you’d like to tell us about yourself that
          will help us make our decision?
        </h3>
        <p>
          <em>
            I would be happy to make you all a site or a tool as part of the
            interview process.
          </em>
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

export default Answers;

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
