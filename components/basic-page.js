import Nav from './nav.js'
import Head from 'next/head'

export default function BasicPage({title, children}) {
    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <Nav/>
            <Head>
                <title>{title}</title>
            </Head>
            <h1 className="title">{title}</h1>
            <div className="markdown mx-10">
                {children}
            </div>
        </div>
    )
}