import heartImg from "../../images/svg/header/Vector-1.svg";

const PaintingCard = ({ img }: { img: string }) => {
  return (
    <div className="painting-card">
      <div className="painting-card__sliderUp">
        {/* <h3 className="painting-card__inStock">In stock</h3> */}
        <h3 className="painting-card__availability">ASK FOR AVAILABILITY</h3>
        {/* <div className="painting-card__favorite">
          <img src={heartImg} alt="" />
        </div> */}
      </div>
      <div className="painting-card__painting">
        <img src={img} alt="" />
      </div>
      <div className="painting-card__content">
        <h5 className="painting-card__name">MOVIE TIME</h5>
        <p className="painting-card__description">
          Original artwork. Mixed media on canvas. 130x100 cm
        </p>
        <p className="painting-card__price">$5,500</p>
      </div>
    </div>
  );
};

export default PaintingCard;