import BasicPage from '../../../components/basic-page'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
const glob = require('glob')

export default function MillPost(props) {
	return (
		<BasicPage title={props.frontmatter.title}>
			<div className="flex justify-center">
				<div className="text-lg bg-gray-300 mx-center text-center mb-4 p-2" >This is part of my <a href="/project/cnc-mill">series</a> on my CNC mill. Feel free to <a href="https://twitter.com/NickParkerPrint">tweet</a> at
				me about it</div>
			</div>
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
	const { post_title } = ctx.params
	console.log(`../../posts/cnc-mill/${post_title}.md`)
	const content = await import(`../../../posts/cnc-mill/${post_title}.md`)
	const config = await import(`../../../data/config.json`)
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
	const blogs = glob.sync('posts/cnc-mill/*.md')
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
	const paths = blogSlugs.map(slug => `/project/${slug}`)

	return {
		paths,
		fallback: false,
	}
}