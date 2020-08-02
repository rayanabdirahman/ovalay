export const MailChimpForm: React.FunctionComponent = () => (
  <form className="form" action="">
    <div className="form-group">
      <input placeholder="email address" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    </div>
    <button type="submit">Join waitlist</button>
  </form>
)