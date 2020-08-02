import { MailChimpForm } from "./MailChimpForm";

export const Hero: React.FunctionComponent = () => (
  <section className="jumbotron">
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          <h1 className="display-4">The online mall for trainers</h1>
          <p className="lead mb-3">Join our waitlist to get early access</p>
          <MailChimpForm />
        </div>
        <div className="col-6">
          <img src="/recommendations.png" alt="" width="100%"/>
        </div>
      </div>
    </div>
  </section>
)