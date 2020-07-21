import Link from 'next/link'

export const Navbar: React.FunctionComponent = () => (
  <div className="navbar navbar-expand-lg">
    <div className="container">
      <a className="navbar-brand">mainstreet</a>
      
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link href="/">
              <a className="nav-link">Store owner <span className="sr-only">(current)</span></a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">Contact</a>
            </Link>
          </li>
        </ul>
      </div>

      <form className="form-inline">
        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Join waitlist</button>
      </form>
    </div>
  </div>
)