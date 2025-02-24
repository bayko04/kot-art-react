import "./BackToTop.scss";

const BackToTop = () => {
  const handleToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div onClick={handleToTop} className="backToTop">
      <button>BACK TO TOP</button>
    </div>
  );
};

export default BackToTop;
