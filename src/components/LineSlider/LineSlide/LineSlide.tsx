import slideImg from "../../../images/png/slider1/1.png";

const LineSlide = () => {
  return (
    <div className="line-slide">
      <div className="line-slide__painting">
        <img src={slideImg} alt="" />
      </div>
      <div className="line-slide__content">
        <h3>Wood Art</h3>
      </div>
    </div>
  );
};

export default LineSlide;
