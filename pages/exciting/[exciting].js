import BasicPage from '../../components/basic-page'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
const glob = require('glob')

export default function ExcitingPage(props) {
	return (
		<BasicPage title={props.frontmatter.title}>
			<div className="text-lg bg-yellow-200 mx-center text-center mb-4" >Warning: This section of my site describes <span className="italic">my current understanding</span> of 
			tech I'm excited about. Parts of it will be wrong. Please do your research before basing non-trivial decisions on this page, and submit any 
			corrections <a href="https://github.com/nick-parker/nickparkerco/issues">here</a>. Also, feel free to <a href="https://twitter.com/NickParkerPrint">tweet</a> at me about it</div>
			<article>
				<div className="markdown">
					{props.markdownBody === "" ? "It looks like I haven't written this yet..." :
					<ReactMarkdown source={props.markdownBody}/>
				}
				</div>
			</article>
		</BasicPage>
	)
}

export async function getStaticProps({ ...ctx }) {
	console.log(ctx)
	const { exciting } = ctx.params
	console.log(`../../posts/exciting/${exciting}.md`)
	const content = await import(`../../posts/exciting/${exciting}.md`)
	const config = await import(`../../data/config.json`)
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
	//get all .md files in the posts dir
	const blogs = glob.sync('posts/exciting/*.md')
	console.log(blogs)
	//remove path and extension to leave filename only
	const blogSlugs = blogs.map(file =>
		file
			.slice(6)
			.replace(/ /g, '-')
			.slice(0, -3)
			.trim()
	)
	console.log(blogSlugs)
	// create paths with `slug` param
	const paths = blogSlugs.map(slug => `/${slug}`)

	return {
		paths,
		fallback: false,
	}
}