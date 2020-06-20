import Link from 'next/link'

const links = [
  { href: '/projects', label: 'Projects' },
  { href: '/info-diet', label: 'Info Diet' },
  { href: '/exciting', label: 'Exciting Tech' },
]

export default function Nav() {
  return (
    <nav>
      <div className="flex text-grey-500 justify-between items-center p-8 md:text-xl lg:text-2xl">
        <Link href="/">
          <a>Home</a>
        </Link>
        <div className="flex justify-between items-center space-x-4">
          {links.map(({ href, label }) => (
            <Link href={href} key={href}>
              <a className="md:px-8">{label}</a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
