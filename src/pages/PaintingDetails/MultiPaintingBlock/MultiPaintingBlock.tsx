import { useLocation, useNavigate } from "react-router-dom";
import "./MultiPaintingBlock.scss";
import WhatsAppLink from "../../../shared/ui/WhatsAppLink/WhatsAppLink";

const MultiPaintingBlock = ({ data }: { data?: any }) => {
  const navigate = useNavigate();
  const currentUrl = window.location.href;

  return (
    <div className="multi-block">
      <h4 className="multi-block__title">{data?.title}</h4>
      <div className="multi-block__row">
        <div className="multi-block__left">
          <p className="multi-block__author">{data?.author?.name}</p>
          <p className="multi-block__subinfo">
            Original artwork, {data?.width + "x" + data?.height} cm
          </p>
        </div>
        <div className="multi-block__right">
          <img src="" alt="" />
        </div>
      </div>

      <div className="multi-block__dashboard">
        <h3 className="multi-block__price">
          {data?.price} <span>{data?.currency}</span>
        </h3>

        <div className="multi-block__btns">
          {/* <button
            onClick={() => navigate(data?.author?.whatsapp)}
            className="multi-block__buy"
          >
            Buy now
          </button> */}
          <WhatsAppLink
            phone={data?.author?.whatsapp}
            message={`Hi, I'm here about the painting \n${currentUrl}`}
          >
            Buy now
          </WhatsAppLink>
          <button
            onClick={() => navigate(data?.author?.whatsapp)}
            className="multi-block__offer"
          >
            Make an offer
          </button>
          {/* <WhatsAppLink
            phone={data?.author?.whatsapp}
            message={`Hi, I'm here about the painting \n${currentUrl}`}
          >
            Make an offer
          </WhatsAppLink> */}
        </div>

        <div className="multi-block__additional-btns">
          {/* <button>Share</button> */}
          <WhatsAppLink
            phone={data?.author?.whatsapp}
            message={`Hi, I'm here about the painting \n${currentUrl}`}
          >
            Share
          </WhatsAppLink>
          <button onClick={() => navigate(data?.author?.whatsapp)}>
            Talk to an expert
          </button>
        </div>
      </div>

      <h4 className="multi-block__question-btn">
        <button onClick={() => navigate(data?.author?.whatsapp)}>
          Have a question?
        </button>
      </h4>
    </div>
  );
};

export default MultiPaintingBlock;
