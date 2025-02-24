import { useNavigate } from "react-router-dom";
import "./MultiPaintingBlock.scss";

const MultiPaintingBlock = ({ data }: { data?: any }) => {
  const navigate = useNavigate();

  return (
    <div className="multi-block">
      <h4 className="multi-block__title">
        {data?.title || "‘’My Life, ,My Rules”"}
      </h4>
      <div className="multi-block__row">
        <div className="multi-block__left">
          <p className="multi-block__author">
            {data?.author?.name || "Roman Kozhokin"}
          </p>
          <p className="multi-block__subinfo">
            Original artwork, {data?.width + "x" + data?.height || "120×122"} cm
          </p>
        </div>
        <div className="multi-block__right">
          <img src="" alt="" />
        </div>
      </div>

      <div className="multi-block__dashboard">
        <h3 className="multi-block__price">
          {data?.price || "$2,700"} <span>{data?.currency || "USD"}</span>
        </h3>

        <div className="multi-block__btns">
          <button
            onClick={() => navigate(data?.author?.whatsapp)}
            className="multi-block__buy"
          >
            Buy now
          </button>
          <button
            onClick={() => navigate(data?.author?.whatsapp)}
            className="multi-block__offer"
          >
            Make an offer
          </button>
        </div>

        <div className="multi-block__additional-btns">
          <button>Share</button>
          <button>Talk to an expert</button>
        </div>
      </div>

      <h4 className="multi-block__question-btn">
        <button>Have a question?</button>
      </h4>
    </div>
  );
};

export default MultiPaintingBlock;
