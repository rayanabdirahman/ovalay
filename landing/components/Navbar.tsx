import Link from 'next/link'

export const Navbar: React.FunctionComponent = () => (
  <div className="navbar navbar-expand-lg">
    <a className="navbar-brand" href="#">mainstreet</a>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link  href="#">
            <a className="nav-link">Store owners</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link  href="#">
            <a className="nav-link">Contact us</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link  href="#">
            <a className="nav-link">Join waitlist</a>
          </Link>
        </li>
      </ul>
    </div>
  </div>
)