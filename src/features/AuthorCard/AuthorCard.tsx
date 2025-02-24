import style from "./AuthorCard.module.scss";
import imgTest from "../../shared/assets/images/content/sl2.jpg";
import { useNavigate } from "react-router-dom";
import { FC } from "react";
import DeleteBtn from "../../shared/ui/DeleteBtn/DeleteBtn";

interface IAuthorCard {
  deletable?: boolean;
  admin?: boolean;
  name?: string;
  bio?: string;
  avatar?: string;
  id?: number;
}

const AuthorCard: FC<IAuthorCard> = ({
  deletable,
  admin,
  name,
  bio,
  avatar,
  id,
}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (admin) {
      return navigate(`/admin/edit-author/${id}`);
    }

    navigate(`/author-detail/${id}`);
  };

  return (
    <div onClick={handleNavigate} className={style.authorCard}>
      <div className={style.authorCard__img}>
        <img src={avatar || imgTest} alt="" />
      </div>
      <div className={style.authorCard__name}>{name || "ROMAN KOZHOKIN"}</div>

      {/* {deletable && <DeleteBtn />} */}
    </div>
  );
};

export default AuthorCard;
