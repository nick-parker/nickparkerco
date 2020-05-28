import BasicPage from './basic-page'

export default function ExcitingPage({title, children}) {
    return (
        <BasicPage title={title}>
            <div className="text-lg bg-yellow-200 mx-center text-center" >Warning: This section of my site describes <span className="italic">my current understanding</span> of tech I'm excited about. Parts of it
            will be wrong. Please do your research before basing non-trivial decisions on this page.</div>
            {children}
        </BasicPage>
    )
}