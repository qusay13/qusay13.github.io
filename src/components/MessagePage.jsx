import "./MessagePage.css";

/**
 * محتوى الصفحة الأخيرة الخاصة بالرسالة الشخصية.
 * عدّل النص داخل messageText كما تشاء — هذا هو المكان المخصص لجملك الخاصة بزينب.
 */
const messageText = `زينب،

كل صفحة من هذا الكتاب كانت محاولة صغيرة لأقول لكِ كم أنتِ مهمة.
الكلمات قد لا تكفي أحياناً، لكنني أردتُ أن أترك لكِ شيئاً يبقى،
شيئاً تعودين إليه كل مرة تحتاجين أن تتذكري كم أنتِ محبوبة.

كل عام وأنتِ بخير، يا أجمل ما في حياتنا.`;

export default function MessagePage({ totalPages }) {
  return (
    <div className="page-inner message-page">
      <span className="page-ornament" aria-hidden="true">
        ✦
      </span>
      <h2 className="page-poem-title">رسالة لكِ</h2>

      <div className="message-box">
        <p className="message-text">{messageText}</p>
      </div>

      <span className="page-number">{totalPages} / {totalPages}</span>
    </div>
  );
}
