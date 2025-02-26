import { Link, useNavigate } from "react-router-dom";
import "./NewItems2.scss";

const NewItems2 = () => {
  const navigate = useNavigate();

  return (
    <div className="new-items2">
      <div className="container">
        <h2 className="new-items2__title">New items</h2>
        <p className="new-items2__subtitle">
          <Link to="/all-artworks">All paintings</Link>
        </p>

        <div className="new-items2__dashboard">
          <div className="new-items2__content">
            <h3 className="new-items2__companyName">Its KotArt Team</h3>
            <p className="new-items2__text">
              Miss D. Gallery showcases Pop and Fine-art since 2017. Our gallery
              is located at the front of the Dan Tel Aviv Hotel in the heart of
              Tel Aviv, Israel. Each of the artists we present has a unique
              story and an original artistic path to follow, and our clients
              from all over the world enjoy door-to-door shipping, from the
              gallery to their doorstep.
            </p>
            <div
              onClick={() => navigate("about-us")}
              className="new-items2__btn"
            >
              <button>read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewItems2;
