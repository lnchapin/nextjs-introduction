import Link from 'next/link'

const Header = () => {
  return (
    <nav>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link prefetch href='/about'>
        <a>About</a>
      </Link>
      <Link href='/contact'>
        <a>Contact</a>
      </Link>
      <style jsx>{`
        a {
          padding: 1rem;
          text-decoration: none;
        }
        nav {
          height: 10vh;
          background-color: lightgray;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </nav>
  )
}

export default Header
