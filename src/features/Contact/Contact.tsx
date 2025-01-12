import "./Contact.scss";

const Contact = ({ text, img }: { text?: string; img?: string }) => {
  return (
    <div className="contact">
      <div className="contact__row">
        <div className="contact__img">
          <img src={img} alt="" />
        </div>
        <a className="contact__link" href="">
          {text}
        </a>
      </div>
    </div>
  );
};

export default Contact;
