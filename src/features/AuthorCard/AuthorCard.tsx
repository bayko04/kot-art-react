import style from "./AuthorCard.module.scss";
import imgTest from "../../images/content/sl2.jpg";
import { useNavigate } from "react-router-dom";

const AuthorCard = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/author-detail")}
      className={style.authorCard}
    >
      <div className={style.authorCard__img}>
        <img src={imgTest} alt="" />
      </div>
      <div className={style.authorCard__name}>ROMAN KOZHOKIN</div>
    </div>
  );
};

export default AuthorCard;
