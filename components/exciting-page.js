import BasicPage from './basic-page'

export default function ExcitingPage(props) {
	const {title} = props
	return <BasicPage title={title}>
		<div className="text-lg bg-yellow-200 mx-center text-center mb-4" >Warning: This section of my site describes <span className="italic">my current understanding</span> of 
		topics I'm curious about. Parts of it will be wrong. I write authoritatively without hedging because it's more fun, but please don't mistake that for actual authority.
		Please do your research before basing non-trivial decisions on this, and submit any 
		corrections <a href="https://github.com/nick-parker/nickparkerco/issues">here</a>. Also, feel free to <a href="https://twitter.com/NickParkerPrint">tweet</a> at me about it</div>
		<article>
			<div className="markdown">
				{props.children ? props.children : "It looks like I haven't written this yet..."}
			</div>
		</article>
	</BasicPage>
}