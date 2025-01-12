import { FC } from "react";
import "./Contacts.scss";
import Contact from "../../features/Contact/Contact";
import telImg from "../../images/svg/footer/phone.svg";
import emailImg from "../../images/svg/footer/email.svg";
import locImg from "../../images/svg/footer/location.svg";
import logoImg from "../../images/svg/logo.svg";

const Contacts: FC = () => {
  return (
    <div className="contacts">
      <div className="container">
        <div className="contacts__row">
          <div className="contacts__left">
            <h2 className="contacts__title">Contacts</h2>
            <div className="contacts__dashboard">
              <Contact img={telImg} text="972-053-203-0518" />
              <Contact img={emailImg} text="kot.art.rj@gmail.com" />
              <Contact img={locImg} text="Tel aviv, Rotshild 77, Israel" />
            </div>
          </div>

          <div className="contacts__img">
            <img src={logoImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
