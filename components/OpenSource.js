import Link from "next/link";
import { AiOutlineGithub } from "react-icons/ai";

export default function OpenSource() {
  return (
    <div>
      <ul>
        <div className="z">
          <div className="y">
            <Link href="https://github.com/brxck/gatsby-starter-stripe">
              <a id="git">
                <AiOutlineGithub className="blue" />
              </a>
            </Link>{" "}
          </div>
          <Link
            className="pad"
            href="https://gatsby-starter-stripe.netlify.app/"
          >
            <a className="pad">React eCommerce Starter</a>
          </Link>
        </div>
      </ul>
      <style jsx>{`
        a {
          font-size: calc(16px + 0.5vw);

  
          margin-left: 0px;

        }

        .z {
          margin-left: 0;
          padding-top: 10px;
        }
        a:hover {
          color: blue;
        }
      `}</style>
    </div>
  );
}
