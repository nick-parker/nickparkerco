export default function Im({src, cap, alt, width="90%", click=false, link=""}) {
    if(alt === undefined) {
        alt = cap
    }
    src = "/images/" + src
    const fig = <figure className="mx-auto" style={{width}}>
        <img src={src} alt={alt} className="px-2"/>
        <figcaption className="text-xs md:text-sm text-gray-800 p-2">{cap}</figcaption>
    </figure>

    if(click || link) {
        return <a href={link === "" ? src : link} target="_blank" rel="noreferrer noopener" style={{textDecoration: 'none'}}>
            {fig}
            </a>
    } else {
        return fig
    }
}

export function ImSet(props) {
    return <div className="flex justify-center items-center flex-col md:flex-row">
        {props.children}
    </div>
}