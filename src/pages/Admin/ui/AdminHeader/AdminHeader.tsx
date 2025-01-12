import { useNavigate } from "react-router-dom";
import "./AdminHeader.scss";
import Burger from "../../../../components/Burger/Burger";

const AdminHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-header">
      <div className="admin-header__row">
        <h2 onClick={() => navigate("/")} className="admin-header__title">
          KOT-ART
        </h2>

        <div className="admin-header__burger">
          <Burger />
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
