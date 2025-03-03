import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthorCard.scss";

const AuthorCard = ({ data }: { data?: any }) => {
  const [isHided, setIsHided] = useState(true);
  const navigate = useNavigate();

  const toggleHide = () => {
    setIsHided((prev) => !prev);
  };

  const handleNavigate = () => {
    navigate(`/author-detail/${data?.author?.id}`);
  };

  return (
    <div className="author-card">
      <h4 className="author-card__title">About the artist</h4>

      <div className="author-card__row">
        <div className="author-card__initials">
          <div className="author-card__img">
            <img src={data?.author?.avatar} alt="" />
          </div>
          <div className="author-card__left">
            <h6 className="author-card__fullname">{data?.author?.name}</h6>
            <p className="author-card__text">
              <strong>Biography:</strong>
              {data?.author?.bio}
            </p>

            <div
              onClick={toggleHide}
              className={`author-card__readMore ${
                isHided ? "hided" : "showed"
              }`}
            >
              {/* {isHided ? <button>Read more</button> : <button>hide</button>} */}
              <button onClick={handleNavigate}>Read more</button>
            </div>
          </div>
        </div>

        <div className="author-card__btns">
          <button onClick={() => navigate(data?.author?.instagram)}>
            Follow
          </button>
          <button onClick={() => navigate(data?.author?.whatsapp)}>
            Send message
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
