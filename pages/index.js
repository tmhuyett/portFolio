import Layout from '@components/Layout'
import PostList from '@components/PostList'
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons';

import getPosts from '@utils/getPosts'

const Index = ({ posts, title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={title} description={description}>

        <h1 className="title">Todd Huyett</h1>
        <h2>Web Developer</h2>


          

        <h3 className="description">
          Recent projects:
        </h3>
        <main>
          <PostList posts={posts} />
        </main>

        <h3>About:</h3>
        <p>Before getting into JavaScript, I taught English in various countries. I enjoy coding, Byzantine history, perfumery, squirrels, and linguistics. As a developer, I enjoy learning to use new frameworks and tools, which is how I spend most of my free time. </p>
   
      </Layout>
      <style jsx>{`
        .title {
       
          font-size: calc(30px + .5vw);
          padding-left: 20px;
          color: black;
       
         
        }
        h1 {
      
          padding-left: 20px;
          style: none;
         
        }
        h2 {
          padding-left: 22px;
          font-size: calc(18px + .5vw);
     
          
          style: bold;
        
          padding-top: 0;
          margin-top: -20px;
          color: black;
    
      
          
        }
        h3 {
          padding-left: 20px;
          padding-bottom: 0;
          margin-bottom: 0;
          
        }



        p {
          padding-left: 20px;
          font-size: 18px;
          padding-bottom: 0;
          margin-bottom: 0;

      
          
        }



 
        
      `}</style>
    </>
  )
}

export default Index

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  const posts = ((context) => {
    return getPosts(context)
  })(require.context('../posts', true, /\.md$/))

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
