import { MailChimpForm } from './MailChimpForm';

export const Hero: React.FunctionComponent = () => (
  <section className="jumbotron">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6">
          {/* <h1 className="display-4">The online mall for trainers</h1> */}
          <h1 className="display-4">We're bringing your favourite physical sneaker stores under one roof</h1>
          <h2 className="sub-heading" >Mainstreet is a social commerce marketplace to <strong>shop</strong>,  <strong>follow</strong> and <strong>interact</strong> with the stores you love</h2>
          <p className="lead mb-3">Join our waitlist to get early access</p>
          <MailChimpForm />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <img src="/recommendations.png" alt="product image" width="100%"/>
        </div>
      </div>
    </div>
  </section>
)