import Link from "next/link"
import { AiOutlineGithub } from "react-icons/ai"

export default function PostList({ posts }) {
  if (posts === "undefined") return null

  return (
    <div>
      {!posts && <div>No posts!</div>}
      <ul>
        {posts &&
          posts.map(post => {
            return (
              <div className="q">
                <div className="boxa">
                  <Link href={{ pathname: `${post.frontmatter.repo}` }}>
                    <a>
                      <AiOutlineGithub />
                    </a>
                  </Link>
                </div>
                <div className="boxb" key={post.slug}>
                  <Link
                  
                    href={{ pathname: `${post.frontmatter.url}` }}
                    target="_blank"
                  >
                    <a>{post?.frontmatter?.title}</a>
                  </Link>
                </div>
                <div className="boxc">{post?.frontmatter?.description}</div>
        
              </div>
            )
          })}
      </ul>
      <style jsx>{`
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
      `}</style>
    </div>
  )
}
