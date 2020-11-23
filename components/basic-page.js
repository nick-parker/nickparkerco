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
            <div className="text-left sm:text-base md:text-lg w-3/4 mx-auto pb-10">
                {children}
            </div>
        </>
    )
}