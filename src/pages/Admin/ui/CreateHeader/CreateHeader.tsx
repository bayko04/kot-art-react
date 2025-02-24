import BasicBtn from "../../../../shared/ui/BasicBtn/BasicBtn";
import "./CreateHeader.scss";

const CreateHeader = ({ handleClick, title, btnText }: any) => {
  return (
    <div className="create-header">
      <h1 className="create-header__title">{title}</h1>
      <BasicBtn clickFn={handleClick} title={btnText} />
    </div>
  );
};

export default CreateHeader;
