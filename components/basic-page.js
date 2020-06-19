import Nav from './nav.js'

export default function BasicPage({title, children}) {
    return (
        <>
            <Nav/>
            <h1 className="title">{title}</h1>
            <div className="text-left sm:text-base md:text-lg w-3/4 mx-auto">
                {children}
            </div>
        </>
    )
}