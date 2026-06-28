import { useRef, useState, useCallback, useEffect } from "react";
import Page from "./Page";
import "./Book.css";

export default function Book({ poems, onClose }) {
  const pages = poems.map((p, idx) => ({ ...p, pageNumber: idx + 1 }));
  const maxPage = pages.length;

  // currentPage: عدد الصفحات المقلوبة
  const [currentPage, setCurrentPage] = useState(0);
  const [isClosing, setIsClosing] = useState(false);

  const touchStartX = useRef(null);
  const isAnimating = useRef(false);

  const goNext = useCallback(() => {
    if (isAnimating.current) return;
    setCurrentPage((prev) => {
      if (prev >= maxPage) return prev;
      isAnimating.current = true;
      setTimeout(() => (isAnimating.current = false), 860);
      return prev + 1;
    });
  }, [maxPage]);

  const goPrev = useCallback(() => {
    if (isAnimating.current) return;
    setCurrentPage((prev) => {
      if (prev <= 0) return prev;
      isAnimating.current = true;
      setTimeout(() => (isAnimating.current = false), 860);
      return prev - 1;
    });
  }, []);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    const SWIPE_THRESHOLD = 45;
    // RTL: سحب لليمين (delta > 0) = الصفحة التالية، سحب لليسار = السابقة
    if (delta > SWIPE_THRESHOLD) goNext();
    else if (delta < -SWIPE_THRESHOLD) goPrev();
    touchStartX.current = null;
  };

  const progressPct = Math.round((currentPage / maxPage) * 100);

  const handleCloseBook = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 1200); // 1.2s for closing animation
  };

  return (
    <div className={`book-scene ${isClosing ? "is-closing" : ""}`}>
      <button className="close-btn" onClick={onClose} aria-label="إغلاق الكتاب والعودة للغلاف">
        ✕
      </button>

      <div
        className="book"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="book-spine-shadow" aria-hidden="true" />

        {/* الأوراق الفعلية للقصائد */}
        {pages.map((page, idx) => (
          <Page
            key={idx}
            content={page}
            totalPages={maxPage}
            isFlipped={idx < currentPage}
            zIndex={idx < currentPage ? idx : pages.length - idx}
          />
        ))}

        <span className="book-ribbon-mark" aria-hidden="true" />
      </div>

      <div className="book-controls">
        <button
          className="nav-btn"
          onClick={goPrev}
          disabled={currentPage === 0}
          aria-label="الصفحة السابقة"
        >
          ‹ السابقة
        </button>

        <div className="progress-track" aria-hidden="true">
          <div className="progress-fill" style={{ width: `${progressPct}%` }} />
        </div>

        {currentPage === maxPage ? (
          <button
            className="nav-btn nav-btn--close"
            onClick={handleCloseBook}
            aria-label="إغلاق الكتاب"
          >
            إغلاق الكتاب
          </button>
        ) : (
          <button
            className="nav-btn"
            onClick={goNext}
            disabled={currentPage === maxPage}
            aria-label="الصفحة التالية"
          >
            التالية ›
          </button>
        )}
      </div>
    </div>
  );
}
