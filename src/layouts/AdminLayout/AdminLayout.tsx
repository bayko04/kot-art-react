import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";
import { useEffect } from "react";
import { relative } from "path";
import AdminHeader from "../../pages/Admin/ui/AdminHeader/AdminHeader";
import { useSelector } from "react-redux";
import EditBtn from "../../shared/ui/EditBtn/EditBtn";

const AdminLayout = () => {
  const { burger } = useSelector((state: any) => state.burger);
  const navigate = useNavigate();

  useEffect(() => {
    navigate("paintings-list");
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
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
