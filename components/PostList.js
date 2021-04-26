import Link from 'next/link'
import { AiOutlineGithub } from 'react-icons/ai'

export default function PostList({ posts }) {
  if (posts === 'undefined') return null

  return (
    <div>
      {!posts && <div>No posts!</div>}
      <ul>
        {posts &&
          posts.map((post) => {
            return (
              <div className="z" key={post.slug}>
             <div className="y"><Link href={{ pathname: `${post.frontmatter.repo}` }}>
            <a id="git"><AiOutlineGithub className="blue" /></a>
          </Link> </div>
                <Link className="pad" href={{ pathname: `${post.frontmatter.url}` }} target="_blank">
                  <a className="pad">{post?.frontmatter?.title}</a>
                </Link>
                
              
              </div>
            )
          })}
      </ul>
      <style jsx>{`
        a {
     font-size: calc(16px + .5vw);
         
          
    
          font-family: Baskerville Old Face;
          margin-left: 0px;
        
          
          
          style: bold;
      
         
        
          
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
  )
}
