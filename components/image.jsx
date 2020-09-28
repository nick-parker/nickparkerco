export default function Im({src, cap, alt, width=700}) {
    if(alt === undefined) {
        alt = cap
    }
    return <figure className="mx-auto" style={{width}}>
        <img src={"/images/" + src} alt={alt} className="px-2" width={width}/>
        <figcaption className="text-base text-gray-800 p-2">{cap}</figcaption>
    </figure>
}

export function ImSet(props) {
    return <div className="flex justify-center items-center flex-col md:flex-row">
        {props.children}
    </div>
}