import React from "react";
import { Link } from "react-router-dom";

const KotAuth = () => {
  return (
    <div className="kot-auth">
      <div className="container">
        <div className="kot-auth__btns">
          <Link to="/auth" className="kot-auth__signIn">
            Sing in
          </Link>
          <button className="kot-auth__google">Continue with Google</button>
        </div>
      </div>
    </div>
  );
};

export default KotAuth;
