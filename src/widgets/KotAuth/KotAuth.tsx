import "./KotAuth.scss";

const KotAuth = () => {
  return (
    <div className="kot-auth">
      <div className="kot-auth__filter"></div>
      <div className="container">
        <div className="kot-auth__wrapper">
          <h2 className="kot-auth__title">You're invited</h2>
          <p className="kot-auth__text">
            Subscribe to get our latest news and artists spotlights.
          </p>

          <h3 className="kot-auth__slogan">Stay in touch!</h3>

          <form action="" className="kot-auth__form">
            <div>
              <input placeholder="Your email here" type="email" />
              <button type="submit">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default KotAuth;
