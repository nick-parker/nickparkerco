import Head from 'next/head'
import Nav from '../../components/nav'
import CardGrid from '../../components/card-grid'

export default function Exciting({exciting_techs}) {
    return (
    <>
        <Head>
          <title>Exciting Tech</title>
        </Head>
        <Nav/>
        <h1 className="title py-4">Exciting Tech</h1>
        <div className="text-left sm:text-xl md:text-2xl px-8 pb-8">
            I love learning about new technology and talking about it with friends. This is a compilation of the new technologies
            I'm most excited about and <i> my current understanding of them.</i> My goal is to be publicly wrong on the internet
            so people correct me, I learn more about these technologies, and the tech gets more attention. I welcome corrections
            to any of these pages on <a href="https://github.com/nick-parker/nickparkerco/issues">Github</a>.
        </div>
        <CardGrid cards={exciting_techs}/>
    </>
    )
}


export async function getStaticProps() {
    const siteConfig = await import(`../../data/config.json`)
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
        return {
			href: `/exciting/${slug}`,
            title: value.metadata.title,
            text: value.metadata.lede,
            image: value.metadata.thumb
        }
      })
      return data
    })(require.context('./', true, /\.mdx$/))
  
    return {
      props: {
        exciting_techs: posts,
        title: siteConfig.default.title,
        description: siteConfig.default.description,
      },
    }
  }
