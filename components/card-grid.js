import Link from 'next/link'
import { useEffect, useState } from 'react'
// import styles from './card-grid.module.css'

function CardGrid({cards}) {
    let [columns, setColumns] = useState(0)
    useEffect(() => {
        setColumns(window.innerWidth / 400)
        window.addEventListener('resize', () => {
            setColumns(Math.round(window.innerWidth / 400))
        })
    }, [])

    return columns === 0 ? <></> : (
        <div className="cards">
            {cards.map(Card)}
            <style jsx>{`
                grid-template-columns: repeat(${columns}, 1fr);
            `}</style>
        </div>
    )
}

function Card({title, href, image, text}) {
    return (
        <Link href={href} key={href}>
            <div className="card" key={href}>
                <h1 className="section-header">{title}</h1>
                {text ? <div>{text}</div> : <img src={image}/>}
            </div>
        </Link>
    )
}

export default CardGrid