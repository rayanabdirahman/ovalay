import Link from 'next/link'
import { MailChimpForm } from './MailChimpForm'

export const Footer: React.FunctionComponent = () => (
  <footer className="footer">
    <div className="jumbotron">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-4 col-lg-4 text-center">
            <h2 className="h1 mb-5">We’re redefining the shopping experience</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-12 col-lg-12 justify-content-center">
            <div className="col-sm-12 col-md-6 col-lg-6 m-auto">
              <p className="lead mb-3">Join our waitlist to get early access</p>
              <MailChimpForm />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom container">
        <div className="row">
          <div className="col-6">
            <p>made with ♥️  in London</p>
          </div>
          <div className="col-6">
            <ul className="social-links">
              <li className="social-item">              
                <Link href="#">
                  <a>
                    <img src="/twitter-white.png" alt="twitter"/>
                  </a>
                </Link>
              </li>
              <li className="social-item">              
                <Link href="#">
                  <a>
                    <img src="/instagram-white.png" alt="instagram"/>
                  </a>
                </Link>
              </li>
              <li className="social-item">              
                <Link href="#">
                  <a>
                    <img src="/mail-white.png" alt="mail"/>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
)