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
    </div>
  )
}
