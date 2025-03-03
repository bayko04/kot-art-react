import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetAuthor } from "./api/useGetAuthor";
import { useGetPaintings } from "../Admin/Lists/PaintingsList/api/usePaintings";
import BackToTop from "../../components/BackToTop/BackToTop";
import LineSlider from "../../components/LineSlider/LineSlider";
import Pagination from "../../components/Pagination/Pagination";
import PaintingCard from "../../features/PaintingCard/PaintingCard";
import "./AuthorDetail.scss";

const AuthorDetail = () => {
  const [isHided, setIsHided] = useState(true);
  const params = useParams();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 15;
  const { data: authorData } = useGetAuthor(Number(params.id));
  const { data: paintingList } = useGetPaintings({
    page: currentPage,
    pageSize: pageSize,
    authorId: Number(params?.id),
  });
  const toggleHide = () => {
    setIsHided((prev) => !prev);
  };

  const handlePageClick = (event: any) => {
    const selectedPage = event.selected + 1;
    setCurrentPage(selectedPage);
  };

  return (
    <div className="author">
      <div className="author__picture">
        <img src={authorData?.avatar} alt="" />
      </div>

      <div className="container">
        <div className="author__info">
          <div className="authour__left">
            <h1 className="author__name">{authorData?.name?.toUpperCase()}</h1>
            <p className="author__strangetext">Home page \\ ARTISTS \\</p>
            <p className={`author__text ${isHided ? "hided" : "showed"}`}>
              <span>Biography:</span>
              Born
              {authorData?.bio}
            </p>
            <div
              onClick={toggleHide}
              className={`author__readMore ${isHided ? "hided" : "showed"}`}
            >
              {isHided ? <button>Read more</button> : <button>Hide</button>}
            </div>
          </div>
          <div className="authour__right">
            <div className="author__btns">
              <button
                onClick={() => navigate(authorData?.instagram)}
                className="author__follow"
              >
                Follow
              </button>
              <button
                onClick={() => navigate(authorData?.whatsapp)}
                className="author__message"
              >
                Send message
              </button>
            </div>
          </div>
        </div>

        <div className="author__cards">
          {paintingList &&
            paintingList?.results?.map((item: any) => (
              <PaintingCard
                id={item.id}
                image={item.image}
                title={item.title}
              />
            ))}
        </div>

        {paintingList?.count > pageSize && (
          <Pagination
            handlePageClick={handlePageClick}
            pageSize={pageSize}
            count={paintingList.count}
          />
        )}
      </div>
      <LineSlider rec title="Recommendations" />
      <BackToTop />
    </div>
  );
};

export default AuthorDetail;
