import { useNavigate } from "react-router-dom";
import BasicTable from "../../../../shared/ui/BasicTable/BasicTable";
import CreateHeader from "../../ui/CreateHeader/CreateHeader";
import "./RolesList.scss";

const RolesList = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/admin/give-role");
  };

  return (
    <div className="roles-list">
      <CreateHeader
        title="Roles"
        btnText="Give out the role"
        handleClick={handleNavigate}
      />

      <BasicTable />
    </div>
  );
};

export default RolesList;
