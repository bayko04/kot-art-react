import { IoMdSettings } from "react-icons/io";
import "./SettingsBtn.scss";

const SettingsBtn = () => {
  return (
    <div className="settings-btn">
      <IoMdSettings color="#444444" size={"100%"} />
    </div>
  );
};

export default SettingsBtn;
