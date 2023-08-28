import Nav from './nav.js'
import Head from 'next/head'

export default function BasicPage({title, children}) {
    return (
        <>
            <Nav/>
            <Head>
                <title>{title}</title>
            </Head>
            <h1 className="title">{title}</h1>
            <div className="markdown">
                {children}
            </div>
        </>
    )
}