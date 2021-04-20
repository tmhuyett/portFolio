import Link from 'next/link'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

import Layout from '@components/Layout'
import getSlugs from '@utils/getSlugs'

export default function BlogPost({ siteTitle, frontmatter, markdownBody }) {
  if (!frontmatter) return <></>

  return (
    <>
       <div id="cont"><Layout pageTitle={`${siteTitle} | ${frontmatter.title}`}>
      <div id="container">
        <div className="back">
          ←{' '}
          <Link href="/">
            <a>Back to project list</a>
          </Link>
        </div>
        <article>
          <h1>{frontmatter.title}</h1>
          {frontmatter.hero_image && (
            <img
              src={frontmatter.hero_image}
              className="hero"
              alt={frontmatter.title}
            />
          )}
          <div>
            <ReactMarkdown source={markdownBody} />
          </div>
        </article></div>
      </Layout></div>
      <style jsx>{`
     
        #container {
          padding-left: 20px;
          padding-right: 10px;
          padding-top: 20px;
        }
        * {
  font-size: 20px;
        }

        #back {
          padding-top: 20px;
        }

      `}</style>
    </>
  )
}

export async function getStaticProps({ ...ctx }) {
  const { postname } = ctx.params

  const content = await import(`../../posts/${postname}.md`)
  const config = await import(`../../siteconfig.json`)
  const data = matter(content.default)

  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  }
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    return getSlugs(context)
  })(require.context('../../posts', true, /\.md$/))

  const paths = blogSlugs.map((slug) => `/post/${slug}`)

  return {
    paths, // An array of path names, and any params
    fallback: false, // so that 404s properly appear if something's not matching
  }
}
