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
  const touchStartY = useRef(null);
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
    touchStartY.current = e.touches[0].clientY;
  };
  
  const handleTouchEnd = (e) => {
    if (touchStartX.current == null || touchStartY.current == null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;
    
    // نقلب الصفحة فقط إذا كان السحب أفقياً بوضوح، ولم يتم السحب عمودياً (scroll)
    if (Math.abs(deltaX) > 40 && Math.abs(deltaY) < 40) {
      if (deltaX > 0) goNext(); // RTL: right = next
      else if (deltaX < 0) goPrev(); // RTL: left = prev
    }
    touchStartX.current = null;
    touchStartY.current = null;
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
      <button type="button" className="close-btn" onClick={onClose} aria-label="إغلاق الكتاب والعودة للغلاف">
        ✕
      </button>

      <div
        className="book"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="book-spine-shadow" aria-hidden="true" />

        {/* الأوراق الفعلية للقصائد - نعرض فقط الصفحات القريبة لتخفيف الضغط على معالج الجوال (GPU) */}
        {pages.map((page, idx) => {
          // Render only pages close to current to prevent mobile crash
          const isVisible = Math.abs(idx - currentPage) <= 2 || idx === maxPage - 1;
          if (!isVisible) return null;

          return (
            <Page
              key={idx}
              content={page}
              totalPages={maxPage}
              isFlipped={idx < currentPage}
              zIndex={idx < currentPage ? idx : pages.length - idx}
            />
          );
        })}

        <span className="book-ribbon-mark" aria-hidden="true" />
      </div>

      <div className="book-controls">
        <button
          type="button"
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
            type="button"
            className="nav-btn nav-btn--close"
            onClick={handleCloseBook}
            aria-label="إغلاق الكتاب"
          >
            إغلاق الكتاب
          </button>
        ) : (
          <button
            type="button"
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
