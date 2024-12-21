import Nav from './nav.js'
import Head from 'next/head'

export default function BasicPage({ title, children }) {
    return (
        <div className="container mx-auto px-4">
            <Nav/>
            <Head>
                <title>{title}</title>
            </Head>
            <h1 className="title">{title}</h1>
            <div className="markdown">
                {children}
            </div>
        </div>
    )
}