import Link from 'next/link'

const Navbar: React.FunctionComponent = () => (
  <div className="page-container">
    <nav className="navbar">
      <Link href="/">
        <a className="navbar-brand">
          <img src="/logo.svg" alt="Mainstreet logo"/>
        </a>
      </Link>

      <div className="navbar-collapse">
        <button className="navbar-toggle">
          <img src="/icons/menu.svg" alt="menu icon"/>
        </button>
        
        <ul className="navbar-nav">
          <li className="navbar-nav-item">
            <Link href="">
              <a  className="navbar-item">Contact us</a>
            </Link>
          </li>
          <li className="navbar-nav-item">
            <Link href="">
              <a className="navbar-item">Join waitlist</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
)

export { Navbar }
