import BackToTop from "../../components/BackToTop/BackToTop";
import LineSlider from "../../components/LineSlider/LineSlider";
import AuthorCard from "./AuthorCard/AuthorCard";
import MultiPaintingBlock from "./MultiPaintingBlock/MultiPaintingBlock";
import PaintingBanner from "./PaintingBanner/PaintingBanner";
import pinkCatImg from "../../shared/assets/images/png/pinkCat.png";
// import pinkCatImg2 from "../../shared/assets/images/png/selectedArt/2.png";
import { useParams } from "react-router-dom";
import { useGetPaint } from "../Admin/EditForms/EditPainting/api/useGetPaint";
import { useGetPaintings } from "../Admin/Lists/PaintingsList/api/usePaintings";
import { useEffect, useState } from "react";
import "./PaintingDetails.scss";

const PaintingDetails = () => {
  const params = useParams();
  const { data } = useGetPaint(Number(params.id));
  const { data: authorPaints } = useGetPaintings({
    page: 1,
    pageSize: 20,
    authorId: data?.author?.id,
  });
  const [images, setImages] = useState<any>();

  useEffect(() => {
    setImages(data.images);
  }, [data]);

  const handleMainImage = (id: number) => {
    setImages((prev: any) =>
      prev?.map((item: any) =>
        item.id === id
          ? { ...item, is_main: true }
          : { ...item, is_main: false }
      )
    );
  };

  return (
    <div className="paintingDetails">
      <div className="container">
        <div className="paintingDetails__introduction">
          <div className="paintingDetails__paintings">
            <div className="paintingDetails__main-img">
              <img
                src={images?.filter((item: any) => item.is_main)[0].image}
                alt=""
              />
            </div>
            <div className="paintingDetails__secondary-imgs">
              {data?.images?.length > 1 &&
                data?.images?.map((item: any) => (
                  <div onClick={() => handleMainImage(item.id)} key={item.id}>
                    <img src={item.image} alt="" />
                  </div>
                ))}
            </div>
          </div>
          <div className="paintingDetails__options">
            <MultiPaintingBlock data={data} />
          </div>
        </div>
      </div>

      {/* banner */}
      <PaintingBanner />

      <div className="paintingDetails__details">
        <div className="container">
          {/* details */}
          <div className="paintingDetails__row">
            <h3 className="paintingDetails__left">Artist</h3>
            <div className="paintingDetails__right paintingDetails__author">
              {data?.title}
            </div>
          </div>

          {/* authorCard */}
          <div className="paintingDetails__author-card">
            <AuthorCard data={data} />
          </div>

          {/* details */}
          <div className="paintingDetails__row">
            <h3 className="paintingDetails__left">About The Artwork</h3>
            <div className="paintingDetails__right">
              <p>{data?.description}</p>
            </div>
          </div>

          <div className="paintingDetails__row">
            <h3 className="paintingDetails__left">Details & Dimensions</h3>
            <div className="paintingDetails__right">
              <ul>
                <li>
                  <strong>Painting:</strong> {data?.title}
                </li>
                <li>
                  <strong>Original: </strong>

                  {data?.categories?.map((item: any) => item.title)}
                </li>
                <li>
                  <strong>Size:</strong> {data?.width} W x {data?.height} H
                </li>
              </ul>
            </div>
          </div>

          <div className="paintingDetails__row">
            <h3 className="paintingDetails__left">Shipping & Returns</h3>
            <div className="paintingDetails__right">
              <ul>
                <li>
                  <strong>Delivery Time:</strong> Typically 5-7 business days
                  for domestic shipments, 10-14 business days for international
                  shipments.
                </li>
                <li>
                  <strong>Returns:</strong> 14-day return policy. Visit our help
                  section for more information.
                </li>
                <li>
                  <strong>Delivery Cost:</strong> Shipping is included.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {authorPaints?.count > 1 && (
        <div className="paintingDetails__other-artworks">
          <LineSlider
            authorData={authorPaints?.results}
            title="Other artworks by the artist"
          />
        </div>
      )}

      <div className="container">
        <div className="paintingDetails__recoms">
          <LineSlider rec title="Recommendations" />
        </div>

        <BackToTop />
      </div>
    </div>
  );
};

export default PaintingDetails;
