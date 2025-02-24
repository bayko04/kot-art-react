import slideImg from "../../../shared/assets/images/png/slider1/1.png";

const LineSlide = ({ title, img }: { title?: string; img?: string }) => {
  return (
    <div className="line-slide">
      <div className="line-slide__painting">
        <img src={img || slideImg} alt="" />
      </div>
      <div className="line-slide__content">
        <h3>{title || "Wood Art"}</h3>
      </div>
    </div>
  );
};

export default LineSlide;
