import "./AdminLogin.scss";
import logoImg from "../../../images/svg/whiteLogo.svg";

const AdminLogin = () => {
  return (
    <div className="admin-login">
      <div className="admin-login__dashboard">
        <div className="admin-login__header">
          <div className="admin-login__logo">
            <img src={logoImg} alt="" />
          </div>
          <p>Log in</p>
        </div>
        <form action="" className="admin-login__form">
          <div>
            <input placeholder="Login" type="text" />
          </div>
          <div>
            <input placeholder="Password" type="text" />
          </div>
          <div>
            <button>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
