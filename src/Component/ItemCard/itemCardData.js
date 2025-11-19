
import "./itemCard.css";

export default function Card({ cardData, onCardClick }) {
  const handleKey = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onCardClick(cardData);
    }
  };

  return (
    <div
      className="Comment"
      role="button"
      tabIndex={0}
      onClick={() => onCardClick(cardData)}
      onKeyDown={handleKey}
      aria-label={`Open profile for ${cardData.title}`}
    >
      <img
        className="card_img"
        src={cardData.image || "/placeholder.svg"}
        alt={cardData.title || "Profile logo"}
        loading="lazy"
      />

      <h3 className="card_title">{cardData.title}</h3>

      {cardData.description ? (
        <p className="card_desc">{cardData.description}</p>
      ) : null}

      {cardData.subDescription ? (
        <p className="card_sub">{cardData.subDescription}</p>
      ) : null}

      <div className="card_footer">
        <button
          type="button"
          className="cta"
          onClick={(e) => {
            e.stopPropagation();
            onCardClick(cardData);
          }}
          aria-label={`Check profile of ${cardData.title}`}
        >
          <span>Check profile</span>
          <span className="cta_chevron" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}

