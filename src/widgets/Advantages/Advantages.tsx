import adv1 from "../../shared/assets/images/svg/advantages/Group-1.svg";
import adv2 from "../../shared/assets/images/svg/advantages/Group.svg";
import adv3 from "../../shared/assets/images/svg/advantages/Vector.svg";
import adv4 from "../../shared/assets/images/svg/advantages/shipped 1.svg";
import "./Advantages.scss";

const Advantages = () => {
  return (
    <div className="advantages">
      <div className="container">
        <div className="advantages__row">
          <div className="advantages__item">
            <div className="advantages__icon">
              <img src={adv2} alt="" />
            </div>
            <h3 className="advantages__title">Beautiful Art</h3>
            <p className="advantages__text">
              The versatile space makes it easy to keep a fresh supply.
            </p>
          </div>
          <div className="advantages__item">
            <div className="advantages__icon">
              <img src={adv1} alt="" />
            </div>
            <h3 className="advantages__title">Unique Art</h3>
            <p className="advantages__text">
              The versatile space makes it easy to keep a fresh supply.
            </p>
          </div>
          <div className="advantages__item">
            <div className="advantages__icon">
              <img src={adv3} alt="" />
            </div>
            <h3 className="advantages__title">Golden Ratio</h3>
            <p className="advantages__text">
              The versatile space makes it easy to keep a fresh supply.
            </p>
          </div>
          <div className="advantages__item">
            <div className="advantages__icon">
              <img src={adv4} alt="" />
            </div>
            <h3 className="advantages__title">Safety shipping</h3>
            <p className="advantages__text">
              The versatile space makes it easy to keep a fresh supply.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
