const Hero: React.FunctionComponent = () => (
  <div className="page-container">
    <div className="hero">
      <div className="hero-mobile-content">
        <h1>Shop your favourite sneaker stores online</h1>
      </div>

      <div className="hero-content">
        <div className="hero-left-content">
          <div className="hero-form">
            <h1>Shop your favourite sneaker stores online</h1>
            <p>We're bringing the physical sneaker stores you love to one place.</p>
            <form action="">
              <input className="input" type="email" placeholder="Email address"/>
              <button className="btn btn-primary">Join waitlist</button>
            </form>
          </div>
        </div>

        <div className="hero-right-content">
          <div className="hero-image">
            <img 
              src="/images/sneakers-lights.jpg"
              alt="Sneaker World Neon light"/>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export { Hero }