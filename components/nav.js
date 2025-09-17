import Link from 'next/link'

const links = [
  { href: '/projects', label: 'Projects' },
  { href: '/info-diet', label: 'Info Diet' },
  { href: '/understanding', label: 'Understandings' },
]

export default function Nav() {
  return (
    <nav className="px-4">
      <div className="flex justify-between items-center p-4 md:text-xl lg:text-2xl">
        <Link href="/">
          Home
        </Link>
        <div className="flex space-x-4">
          {links.map(({ href, label }) => (
            <Link href={href} key={href} className="px-2">
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
