import { MdDelete } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import "./DeleteBtn.scss";

const DeleteBtn = () => {
  return (
    <div className="delete-btn">
      <MdDeleteOutline color="#444" size={"100%"} />
    </div>
  );
};

export default DeleteBtn;
