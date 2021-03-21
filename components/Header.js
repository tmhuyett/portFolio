import Link from 'next/link'
import { SocialIcon } from 'react-social-icons';

export default function Header() {
  return (
    <>
      <header className="header">
        <nav className="nav" role="navigation" aria-label="main navigation">
          <Link href="https://github.com/prokopious">
            <a>GitHub</a>
          </Link>
          <Link href="https://www.linkedin.com/in/todd-huyett-2596a892/">
            <a>LinkedIn</a>
          </Link>
          <Link href="https://prokopious.github.io/cv2/">
            <a>Contact</a>
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
        }
        nav {
          
          max-width: 100%;
          font-weight: bold;
          font-size: calc(16px + .5vw);
          align-items: center;
          
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
  )
}
