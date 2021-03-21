import Link from 'next/link'

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
                 {` `}
                <Link href={{ pathname: `/post/${post.slug}` }}>
                  <a>{post?.frontmatter?.title}</a>
                </Link>
                
              
              </div>
            )
          })}
      </ul>
      <style jsx>{`
        a {
     font-size: calc(16px + .5vw);
         
          
     color: #4d4d4d;
          font-family: Baskerville Old Face;
          margin-left: 0px;
        
          
          
          style: bold;
      
         
        
          
        }

        
      
.z {
  margin-left: 0;
          padding-top: 10px;
}
        a:hover {
          color: black;
        }

        

      
      `}</style>
    </div>
  )
}
