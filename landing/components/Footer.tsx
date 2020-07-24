import Link from 'next/link'

export const Footer: React.FunctionComponent = () => (
  <footer className="footer">
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          <p>made with ♥️  in London</p>
        </div>
        <div className="col-6">
          <ul className="social-links">
            <li className="social-item">              
              <Link href="#">
                <a>
                  <img src="/twitter.png" alt="twitter"/>
                </a>
              </Link>
            </li>
            <li className="social-item">              
              <Link href="#">
                <a>
                  <img src="/instagram.png" alt="instagram"/>
                </a>
              </Link>
            </li>
            <li className="social-item">              
              <Link href="#">
                <a>
                  <img src="/mail.png" alt="mail"/>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
)