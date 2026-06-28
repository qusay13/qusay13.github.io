import "./BookCover.css";

export default function BookCover({ onOpen, isOpening }) {
  return (
    <div className={`cover-scene ${isOpening ? "is-opening" : ""}`}>
      <button
        type="button"
        className="cover"
        onClick={onOpen}
        aria-label="افتحي الكتاب"
        disabled={isOpening}
      >
        <div className="cover-frame">
          <span className="corner corner-tl" />
          <span className="corner corner-tr" />
          <span className="corner corner-bl" />
          <span className="corner corner-br" />

          <div className="cover-emblem">
            <svg viewBox="0 0 100 100" className="emblem-flourish" aria-hidden="true" fill="currentColor">
              <path d="M 45 90 Q 40 95 30 95 Q 45 95 48 90 Z" />
              <path d="M 55 90 Q 60 95 70 95 Q 55 95 52 90 Z" />
              <path d="M 48 90 C 48 70 45 60 48 50 C 50 60 55 70 52 90 Z" />
              <path d="M 49 55 Q 35 45 25 30 Q 30 45 49 60" />
              <path d="M 51 55 Q 65 45 75 30 Q 70 45 51 60" />
              <path d="M 49 65 Q 30 65 20 55 Q 30 70 49 70" />
              <path d="M 51 65 Q 70 65 80 55 Q 70 70 51 70" />
              <path d="M 50 50 Q 45 30 50 15 Q 55 30 50 50" />
              <circle cx="25" cy="30" r="8" opacity="0.85"/>
              <circle cx="75" cy="30" r="8" opacity="0.85"/>
              <circle cx="20" cy="55" r="7" opacity="0.85"/>
              <circle cx="80" cy="55" r="7" opacity="0.85"/>
              <circle cx="50" cy="15" r="10" opacity="0.85"/>
              <circle cx="35" cy="20" r="9" opacity="0.75"/>
              <circle cx="65" cy="20" r="9" opacity="0.75"/>
              <circle cx="35" cy="40" r="8" opacity="0.75"/>
              <circle cx="65" cy="40" r="8" opacity="0.75"/>
              <circle cx="50" cy="35" r="12" opacity="0.9"/>
              <path d="M 15 20 Q 12 18 15 15 Q 18 18 15 20 Z" />
              <path d="M 85 25 Q 82 23 85 20 Q 88 23 85 25 Z" />
              <path d="M 30 8 Q 27 6 30 3 Q 33 6 30 8 Z" />
            </svg>
          </div>

          <h1 className="cover-title">Zainab</h1>
          <p className="cover-subtitle">كِتابُ الذكرى</p>

          <div className="cover-divider">
            <span className="divider-line" />
            <span className="divider-dot" />
            <span className="divider-line" />
          </div>

          <p className="cover-hint">انقري لتُفتح الصفحة الأولى</p>
        </div>

        <span className="cover-spine" aria-hidden="true" />
        <span className="cover-ribbon" aria-hidden="true" />
      </button>
    </div>
  );
}
