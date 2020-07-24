import { MailChimpForm } from "./MailChimpForm";

export const Hero: React.FunctionComponent = () => (
  <section className="jumbotron text-center">
    <h1 className="display-4">Shopping, but better</h1>
    <p className="lead">We’re redefining the shopping experience</p>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6 text-left">
          <MailChimpForm />
        </div>
      </div>
    </div>
  </section>
)