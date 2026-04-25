

import "./itemCard.css"
import haaderImg from '../../Assets/Rectangle81.png';

export default function ItemCardPopup({ cardData, onClose }) {
  return (
    <div
      className="popup"
      role="dialog"
      aria-modal="true"
      aria-label={`${cardData.title} details`}
    >
      <div className="popup-content">
        <button className="closeButton" onClick={onClose} aria-label="Close popup">
          <span className="closeIcon" aria-hidden="true">
            &times;
          </span>
        </button>

        <img
          src={cardData.image || "/placeholder.svg"}
          alt={cardData.title || "Card image"}
          className="popup_image"
        />

        <h2 className="popup_title">{cardData.title}</h2>

        {cardData.description && <p className="popup_desc">{cardData.description}</p>}
        {cardData.subDescription && <p className="popup_sub">{cardData.subDescription}</p>}

        <div className="popup_actions">
          <button className="cta">
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
    </div>
  )
}

