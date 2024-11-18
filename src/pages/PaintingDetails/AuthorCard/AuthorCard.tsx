const AuthorCard = () => {
  return (
    <div className="author-card">
      <h4 className="author-card__title">About the artist</h4>

      <div className="author-card__row">
        <div className="author-card__initials">
          <div className="author-card__img">
            <img src="" alt="" />
          </div>
          <div className="author-card__left">
            <h6 className="author-card__fullname">Roman Kozhokin</h6>
            <p className="author-card__text">
              <strong>Biography:</strong> Born in 1985 in Northern Russia, and
              immigrated to Israel with his family at the age of 6. For his
              paintings and sculptures, Roman often uses various organic
              materials, mainly wood, which to his perception “… Has lived for
              an entire life, accumulating energy and experience from its
              environment that have left
            </p>

            <div className="author-card__readMore">
              <button>Read more</button>
            </div>
          </div>
        </div>

        <div className="author-card__btns">
          <button>Follow</button>
          <button>Send message</button>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
