import Nav from './nav.js'

export default function BasicPage({title, children}) {
    return (
        <>
            <Nav/>
            <h1 className="title">{title}</h1>
            <div className="text-left sm:text-xl md:text-2xl px-8">
                {children}
            </div>
        </>
    )
}