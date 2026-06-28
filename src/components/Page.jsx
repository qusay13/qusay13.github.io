import "./Page.css";

/**
 * ورقة واحدة في الكتاب — لها وجهان فعليان (front/back) كورقة حقيقية.
 * front = القصيدة الزوجية الظاهرة وقت الورقة مغلقة على اليمين
 * back  = القصيدة الفردية الظاهرة بعد ما تنقلب الورقة لليسار
 *
 * isFlipped: إذا true تكون الورقة انقلبت لليسار (rotateY -180deg في RTL)
 * zIndex: للحفاظ على ترتيب تراكم الأوراق فوق بعضها
 */
export default function Page({ content, totalPages, isFlipped, zIndex, onClick, interactive }) {
  return (
    <div
      className={`page ${isFlipped ? "page--flipped" : ""} ${interactive ? "page--interactive" : ""}`}
      style={{ zIndex }}
      onClick={interactive ? onClick : undefined}
    >
      <div className="page-face page-face--front">
        {content?.custom ? content.custom : <PageContent content={content} totalPages={totalPages} />}
      </div>
    </div>
  );
}

function PageContent({ content, totalPages }) {
  if (!content) {
    return <div className="page-inner page-inner--blank" />;
  }
  return (
    <div className="page-inner">
      <span className="page-ornament" aria-hidden="true">
        ❀
      </span>
      <h2 className="page-poem-title">{content.title}</h2>
      <div className="page-poem-body">
        {content.lines.map((line, idx) => {
          const text = typeof line === "object" ? line.text : line;
          const isQuote = typeof line === "object" ? line.isQuote : false;
          const isHtml = typeof line === "object" ? line.isHtml : false;
          
          if (isHtml) {
            return (
              <p key={idx} className={`page-poem-line ${isQuote ? "page-poem-line--quote" : ""}`} dangerouslySetInnerHTML={{ __html: text }} />
            );
          }
          
          return (
            <p key={idx} className={`page-poem-line ${isQuote ? "page-poem-line--quote" : ""}`}>
              {text}
            </p>
          );
        })}
      </div>
      <span className="page-number">
        {content.pageNumber} / {totalPages}
      </span>
    </div>
  );
}
