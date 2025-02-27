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
                src={
                  images?.filter((item: any) => item.is_main)[0].image ||
                  pinkCatImg
                }
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
              {data?.title || `Roman ${(<br />)} KOzhokin`}
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
              <p>
                {data?.description ||
                  `Painting: Oil and pencil on masonite panel. Size: 18 H x 18 W x
                1 in Oil on canvas I’ve written a little about the process and
                thoughts behind Wading Pool and it's sibling painting Maruta. A
                link to the first, “Waruta: Connections & Inspiration”, is
                below: http://www.mryczek.com/waruta-connections-inspiration/`}
              </p>
            </div>
          </div>

          <div className="paintingDetails__row">
            <h3 className="paintingDetails__left">Details & Dimensions</h3>
            <div className="paintingDetails__right">
              <ul>
                <li>
                  <strong>Painting:</strong> {data?.title || "Oil on Wood"}
                </li>
                <li>
                  <strong>Original:</strong>

                  {data?.categories?.map((item: string) => `${item} `) ||
                    "One-of-a-kind Artwork"}
                </li>
                <li>
                  <strong>Size:</strong> {data?.width || "20"} W x{" "}
                  {data?.height || "20"} H
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

      <div className="paintingDetails__other-artworks">
        <LineSlider
          otherData={authorPaints}
          title="Other artworks by the artist"
        />
      </div>

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
