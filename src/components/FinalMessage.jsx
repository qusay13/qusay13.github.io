import "./FinalMessage.css";

const messageText = `زينب،

كل صفحة من هذا الكتاب كانت محاولة صغيرة لأقول لكِ كم أنتِ مهمة.
الكلمات قد لا تكفي أحياناً، لكنني أردتُ أن أترك لكِ شيئاً يبقى،
شيئاً تعودين إليه كل مرة تحتاجين أن تتذكري كم أنتِ محبوبة.

كل عام وأنتِ بخير، يا أجمل ما في حياتنا.`;

export default function FinalMessage() {
  return (
    <div className="final-message-container">
      <div className="final-message-box">
        <span className="final-ornament" aria-hidden="true">
          ✦
        </span>
        <h2 className="final-title">رسالة لكِ</h2>
        <div className="final-content">
          <p className="final-text">{messageText}</p>
        </div>
      </div>
    </div>
  );
}
