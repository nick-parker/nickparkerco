import Head from 'next/head'
import Nav from '../../components/nav'
import CardGrid from '../../components/card-grid'

export default function Understandings({understandings}) {
    return (
    <>
        <Head>
          <title>Understandings</title>
        </Head>
        <Nav/>
        <h1 className="title py-4">Understandings</h1>
        <div className="text-left sm:text-xl md:text-2xl px-8 pb-8">
            I love learning about new ideas and talking about them with friends. This is a compilation of the topics
            I'm most curious about and <i> my current understanding of them.</i> My goal is to be publicly wrong on the internet
            so people correct me, I learn more about these topics, and they get more attention. I write authoritatively without
            hedging because it's more fun. Please don't mistake that for actual authority. I welcome feedback
            on any of these pages on <a href="https://github.com/nick-parker/nickparkerco/issues">Github</a>.
        </div>
        <CardGrid cards={understandings}/>
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
          image: value.metadata.thumb,
          hidden: value.metadata.hidden,
          date: value.metadata.date
        }
      })

      return data
        .filter(pst => !pst.hidden)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
    })(require.context('./', true, /\.mdx$/))

    return {
      props: {
        understandings: posts,
        title: siteConfig.default.title,
        description: siteConfig.default.description,
      },
    }
  }
