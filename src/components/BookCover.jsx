import "./BookCover.css";

export default function BookCover({ onOpen, isOpening }) {
  return (
    <div className={`cover-scene ${isOpening ? "is-opening" : ""}`}>
      <button
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
            <svg viewBox="0 0 100 100" className="emblem-flourish" aria-hidden="true">
              <path
                d="M50 10 C 35 10, 25 25, 25 35 C 25 48, 38 50, 50 50 C 62 50, 75 48, 75 35 C 75 25, 65 10, 50 10 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
              />
              <line x1="50" y1="50" x2="50" y2="78" stroke="currentColor" strokeWidth="0.8" />
              <path d="M35 78 Q50 70 65 78" fill="none" stroke="currentColor" strokeWidth="0.8" />
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
