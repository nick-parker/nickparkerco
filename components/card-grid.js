import Link from 'next/link'
import styles from './card-grid.module.css'

function CardGrid({cards}) {
    return (
        <div className={styles.cards}>
            {cards.map(Card)}
        </div>
    )
}

function Card({title, href, image, text}) {
    return (
        <Link href={href} key={href}>
            <div className={styles.card} key={href}>
                <h1 className="section-header">{title}</h1>
                {text ? <div>{text}</div> : <img src={image}/>}
            </div>
        </Link>
    )
}

export default CardGrid