import Nav from './nav.js'

export default function BasicPage({title, children}) {
    return (
        <>
            <Nav/>
            <h1 className="title">{title}</h1>
            <div className="text-left sm:text-lg md:text-xl px-8">
                {children}
            </div>
        </>
    )
}