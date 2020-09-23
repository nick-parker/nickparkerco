import BasicPage from '../../../components/basic-page'
import CardGrid from '../../../components/card-grid'
import matter from 'gray-matter'


export default function p(props) {
    const mill_posts = props.allBlogs.map(post => {
        return {
            href: `/project/cnc-mill/${post.slug}`,
            title: post.frontmatter.title,
            text: post.frontmatter.lede,
            image: post.frontmatter.thumb
        }
    })
    return (
        <BasicPage title="Shizuoka ST-N Knee Mill Renovation">
            <img className="w-1/4 mx-auto" src="/images/mill.jpg"/>
            A dear family friend gave me an antique CNC milling machine when I was a teen. It sat idle for 6 years after I left for
            college, but I get a lot of use out of it nowadays. This is the story of its renovation and the things I create with
            it.
            <h1 className="section-header text-center">Posts</h1>
            <CardGrid cards={mill_posts}/>

        </BasicPage>
    )
}

export async function getStaticProps() {
    const siteConfig = await import(`../../../data/config.json`)
    //get posts & context from folder
    const posts = (context => {
      const keys = context.keys()
      const values = keys.map(context)
  
      const data = keys.map((key, index) => {
        // Create slug from filename
        const slug = key
          .replace(/^.*[\\\/]/, '')
          .split('.')
          .slice(0, -1)
          .join('.')
        const value = values[index]
        // Parse yaml metadata & markdownbody in document
        const document = matter(value.default)
        return {
          frontmatter: document.data,
          markdownBody: document.content,
          slug,
        }
      })
      return data
    })(require.context('../../../posts/cnc-mill', true, /\.md$/))
  
    return {
      props: {
        allBlogs: posts,
        title: siteConfig.default.title,
        description: siteConfig.default.description,
      },
    }
  }