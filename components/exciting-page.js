import BasicPage from './basic-page'

export default function ExcitingPage(props) {
	console.log(props)
	const {title} = props
	console.log(title)
	return <BasicPage title={title}>
		<div className="text-lg bg-yellow-200 mx-center text-center mb-4" >Warning: This section of my site describes <span className="italic">my current understanding</span> of 
		tech I'm excited about. Parts of it will be wrong. Please do your research before basing non-trivial decisions on this page, and submit any 
		corrections <a href="https://github.com/nick-parker/nickparkerco/issues">here</a>. Also, feel free to <a href="https://twitter.com/NickParkerPrint">tweet</a> at me about it</div>
		<article>
			<div className="markdown">
				{props.children ? props.children : "It looks like I haven't written this yet..."}
			</div>
		</article>
	</BasicPage>
}