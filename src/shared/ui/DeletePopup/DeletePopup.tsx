import { useDispatch, useSelector } from "react-redux";
import BasicBtn from "../BasicBtn/BasicBtn";
import "./DeletePopup.scss";
import { setIsDelete } from "../../store/reducers/usePopupsStore";
import { useDelete } from "./api/useDelete";
import { useNavigate } from "react-router-dom";

const DeletePopup = () => {
  const { isDeleteUrl } = useSelector((state: any) => state.popups);
  const { mutate: deleteFn } = useDelete();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteFn(isDeleteUrl);
    dispatch(setIsDelete(false));

    setTimeout(() => {
      navigate(-1);
    }, 500);
  };

  return (
    <div className="delete-popup">
      <div className="delete-popup__dashboard">
        <h4>Are you sure?</h4>

        <p>
          Are you sure you want to remove this ? <br /> This action cannot be
          undone.
        </p>

        <div className="delete-popup__btns">
          <BasicBtn
            clickFn={() => dispatch(setIsDelete(false))}
            bg="gray"
            title="Cancel"
          />
          <BasicBtn clickFn={handleDelete} bg="red" title="Delete" />
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;
