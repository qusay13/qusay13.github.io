import { useState, useCallback } from "react";
import BookCover from "./components/BookCover";
import Book from "./components/Book";
import FloatingPetals from "./components/FloatingPetals";
import FinalMessage from "./components/FinalMessage";
import poems from "./data/poems";
import "./App.css";

export default function App() {
  const [viewMode, setViewMode] = useState('cover'); // 'cover' | 'book' | 'message'
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpening(true);
    // ننتظر مدة دوران الغلاف (1.1s في BookCover.css) قبل إظهار الكتاب الداخلي
    setTimeout(() => setViewMode('book'), 950);
  }, []);

  const handleCloseBook = useCallback(() => {
    setViewMode('message');
  }, []);

  return (
    <div className="app-stage">
      <FloatingPetals />

      {viewMode === 'cover' && <BookCover onOpen={handleOpen} isOpening={isOpening} />}
      {viewMode === 'book' && <Book poems={poems} onClose={handleCloseBook} />}
      {viewMode === 'message' && <FinalMessage />}
    </div>
  );
}
