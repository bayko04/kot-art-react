import "./PaintingBanner.scss";

const PaintingBanner = () => {
  return (
    <div className="painting-banner">
      <div className="container">
        <div className="painting-banner__row">
          <div className="painting-banner__left">
            <h4 className="painting-banner__title">
              See How Art Fits in Your Space
            </h4>
            <p className="painting-banner__text">
              Curious how a piece of art will look in your home? Click the "View
              in Room" button to virtually preview the artwork on your wall or
              in one of our curated spaces. Explore different room settings and
              ensure the art complements your style perfectly.
            </p>
          </div>

          <div className="painting-banner__right">
            <h4>
              Preview <br /> in Your Space
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaintingBanner;
