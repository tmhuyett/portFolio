import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

export default function Header() {
  return (
    <>
      <header className="header">
        <nav className="nav" role="navigation" aria-label="main navigation">
          <Link href="https://github.com/tmhuyett">
            <a>
              <AiOutlineGithub className="blue" />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/todd-huyett-2596a892/">
            <a>
              <AiFillLinkedin className="blue" />
            </a>
          </Link>
          <Link href="/resume">
            <a>
              <BsFillPersonLinesFill className="blue" />
            </a>
          </Link>
        </nav>
      </header>

      <style jsx>{`
        header {
          width: 100%;

          height: 100px;
          border-bottom: 1px solid #4d4d4d2f;
          display: flex;
          justify-content: left;
          align-items: center;
          padding-left: 20px;
          margin: 0;
          background-color: rgba(192, 191, 191, 0.253);
        }
        nav {
          max-width: 100%;
          font-weight: bold;
          font-size: calc(16px + 0.5vw);
          align-items: center;
          padding-top: 10px;
        }

        a {
          color: black;
        }

        #icon {
          padding-right: 20px;
        }
        nav a {
          margin-right: 20px;
          color: #4d4d4d;
        }
        nav a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}
