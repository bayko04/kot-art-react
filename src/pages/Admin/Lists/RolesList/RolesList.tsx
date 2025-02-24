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
    <div className="roles">
      <CreateHeader
        title="Admin"
        btnText="Create admin"
        handleClick={handleNavigate}
      />

      <div className="roles__content">
        <p>
          On this page, you can create a new administrator account. This account
          will have full access to create, edit, and delete painting categories
          and manage the list of artists.
          <br />
          <br />
          {/* <span>
            ⚠ Warning! ⚠ An administrator account grants full control over
            content management. Do not share its credentials with unauthorized
            individuals, as this may lead to data loss, unauthorized changes, or
            other serious issues. Only trusted users should have access!
          </span> */}
        </p>
      </div>
    </div>
  );
};

export default RolesList;
