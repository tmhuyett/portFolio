import Link from "next/link"
import { AiOutlineGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { BsFillPersonLinesFill } from "react-icons/bs"
import styles from "./Header.module.css"

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <nav
          className={styles.nav}
          role="navigation"
          aria-label="main navigation"
        >
          <Link href="https://github.com/prokopious">
            <a className={styles.nava} id="git">
              GitHub
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/todd-huyett-2596a892/">
            <a className={styles.nava} id="git">
              LinkedIn
            </a>
          </Link>
        </nav>
      </header>
    </>
  )
}
