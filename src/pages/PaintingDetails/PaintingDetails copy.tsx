import BackToTop from "../../components/BackToTop/BackToTop";
import LineSlider from "../../components/LineSlider/LineSlider";
import AuthorCard from "./AuthorCard/AuthorCard";
import MultiPaintingBlock from "./MultiPaintingBlock/MultiPaintingBlock";
import PaintingBanner from "./PaintingBanner/PaintingBanner";
import pinkCatImg from "../../images/png/pinkCat.png";

const PaintingDetails = () => {
  return (
    <div className="paintingDetails">
      <div className="container">
        <div className="paintingDetails__introduction">
          <div className="paintingDetails__paintings">
            <img src={pinkCatImg} alt="" />
          </div>
          <div className="paintingDetails__options">
            <MultiPaintingBlock />
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
              Roman <br /> KOzhokin
            </div>
          </div>

          {/* authorCard */}
          <div className="paintingDetails__author-card">
            <AuthorCard />
          </div>

          {/* details */}
          <div className="paintingDetails__row">
            <h3 className="paintingDetails__left">About The Artwork</h3>
            <div className="paintingDetails__right">
              <p>
                Painting: Oil and pencil on masonite panel. Size: 18 H x 18 W x
                1 in Oil on canvas I’ve written a little about the process and
                thoughts behind Wading Pool and it's sibling painting Maruta. A
                link to the first, “Waruta: Connections & Inspiration”, is
                below: http://www.mryczek.com/waruta-connections-inspiration/
              </p>
            </div>
          </div>

          <div className="paintingDetails__row">
            <h3 className="paintingDetails__left">Details & Dimensions</h3>
            <div className="paintingDetails__right">
              <ul>
                <li>
                  <strong>Painting:</strong> Oil on Wood
                </li>
                <li>
                  <strong>Original:</strong> One-of-a-kind Artwork
                </li>
                <li>
                  <strong>Size:</strong> 20 W x 20 H x 1.5 D in
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
        <LineSlider title="Other artworks by the artist" />
      </div>

      <div className="container">
        <div className="paintingDetails__recoms">
          <LineSlider title="Recommendations" />
        </div>

        <BackToTop />
      </div>
    </div>
  );
};

export default PaintingDetails;
