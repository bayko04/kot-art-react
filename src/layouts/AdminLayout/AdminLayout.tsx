import { Outlet, useLocation, useNavigate } from "react-router-dom";
import SideBar from "./SideBar/SideBar";
import { useEffect } from "react";
import AdminHeader from "../../pages/Admin/ui/AdminHeader/AdminHeader";
import { useSelector } from "react-redux";
import DeletePopup from "../../shared/ui/DeletePopup/DeletePopup";
import "./AdminLayout.scss";

const AdminLayout = () => {
  const { burger } = useSelector((state: any) => state.burger);
  const { isDelete } = useSelector((state: any) => state.popups);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/admin") {
      navigate("paintings-list");
    }
  }, []);

  return (
    <>
      <AdminHeader />
      <div className="admin-layout">
        <div className="admin-layout__sidebar">
          <SideBar />
        </div>
        <div className="admin-layout__wrapper">
          <div className="admin-layout__dashboard">
            <Outlet />
            {/* <h1 className="admin-layout__title">Картинки</h1> */}

            {isDelete && <DeletePopup />}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
