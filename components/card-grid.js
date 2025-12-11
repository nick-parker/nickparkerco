import Link from 'next/link'
import { useEffect, useState } from 'react'

function CardGrid({ cards }) {
  const [columns, setColumns] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setColumns(Math.max(1, Math.floor(window.innerWidth / 400)))
    }

    handleResize() // Set initial columns
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div
      className="cards"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: '10px', // Adjust gap between cards if needed
      }}
    >
      {cards.map((card, index) => (
        <Card key={card.href || index} {...card} />
      ))}
    </div>
  )
}

function Card({ title, href, image, text }) {
  return (
    <Link href={href} key={href} style={{ textDecoration: 'none' }}>
      <div
        className="card"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%', // Ensure the card fills the height
          padding: '15px',
          border: '1px solid #ddd',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          backgroundColor: '#fff'
        }}
      >
        <h1 className="section-header">{title}</h1>
        {text ? <div>{text}</div> : <img src={image} alt={title} />}
      </div>
    </Link>
  )
}

export default CardGrid