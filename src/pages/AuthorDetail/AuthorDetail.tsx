import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetAuthor } from "./api/useGetAuthor";
import { useGetPaintings } from "../Admin/Lists/PaintingsList/api/usePaintings";
import BackToTop from "../../components/BackToTop/BackToTop";
import LineSlider from "../../components/LineSlider/LineSlider";
import Pagination from "../../components/Pagination/Pagination";
import PaintingCard from "../../features/PaintingCard/PaintingCard";
import authorImg from "../../shared/assets/images/content/author.jpg";
import cardImg1 from "../../shared/assets/images/png/slider1/1.png";
import cardImg2 from "../../shared/assets/images/png/slider1/2.png";
import cardImg3 from "../../shared/assets/images/png/slider1/3.png";
import cardImg4 from "../../shared/assets/images/png/slider1/4.png";
import "./AuthorDetail.scss";

const AuthorDetail = () => {
  const [isHided, setIsHided] = useState(true);
  const params = useParams();
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
        <img src={authorData?.avatar || authorImg} alt="" />
      </div>

      <div className="container">
        <div className="author__info">
          <div className="authour__left">
            <h1 className="author__name">
              {authorData?.name?.toUpperCase() || "ROMAN KOZHOKIN"}
            </h1>
            <p className="author__strangetext">Home page \\ ARTISTS \\</p>
            <p className={`author__text ${isHided ? "hided" : "showed"}`}>
              <span>Biography:</span>
              Born 
              {authorData?.bio ||
                `in 1985 in Northern Russia, and immigrated to Israel with his
              family at the age of 6. For his paintings and sculptures, Roman
              often uses various organic materials, mainly wood, which to his
              perception “… Has lived for an entire life, accumulating energy
              and experience from its environment that have left their marks on
              the unique texture”. Roman gives the wood new life using his
              artistic vision. Roman’s works also combine canvas with acrylic
              paint, a collage of newspapers, old comic books, varnish, resin,
              and spray-paint. He studies and experiments with the combination
              of different materials and techniques, ultimately forming a single
              artwork which tells the story of many sources of inspiration.`}
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
                // onClick={() => navigate(data?.instagram)}
                className="author__follow"
              >
                Follow
              </button>
              <button
                // onClick={() => navigate(data?.whatsapp)}
                className="author__message"
              >
                Send message
              </button>
            </div>
          </div>
        </div>

        <div className="author__cards">
          <PaintingCard image={cardImg1} />
          <PaintingCard image={cardImg2} />
          <PaintingCard image={cardImg3} />
          <PaintingCard image={cardImg4} />

          <PaintingCard image={cardImg1} />
          <PaintingCard image={cardImg2} />
          <PaintingCard image={cardImg3} />
          <PaintingCard image={cardImg4} />

          <PaintingCard image={cardImg1} />
          <PaintingCard image={cardImg2} />
          <PaintingCard image={cardImg3} />
          <PaintingCard image={cardImg4} />

          <PaintingCard image={cardImg1} />
          <PaintingCard image={cardImg2} />
          <PaintingCard image={cardImg3} />
          <PaintingCard image={cardImg4} />

          {paintingList &&
            paintingList?.results?.map((item: any) => (
              <PaintingCard
                id={item.id}
                image={item.image}
                title={item.title}
              />
            ))}
        </div>

        {paintingList?.results?.length !== 0 && (
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
