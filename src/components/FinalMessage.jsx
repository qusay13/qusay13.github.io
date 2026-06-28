import "./FinalMessage.css";

export default function FinalMessage() {
  return (
    <div className="final-message-container">
      <div className="final-message-box">
        <span className="final-ornament" aria-hidden="true">
          ✦
        </span>
        <h2 className="final-title">رسالة لكِ</h2>
        <div className="final-content">
          <p className="final-text">
            زينب،
            <br /><br />
            في الختام كل قصيدة انكتبت هون اختيرت خصيصاً الك ومنهم هاي <a href="https://www.youtube.com/results?search_query=كل+القصايد+مروان+خوري" target="_blank" rel="noopener noreferrer" style={{ color: '#d4af37', textDecoration: 'underline' }}>الاغنية</a> ،
            <br /><br />
            كل عام وانت بخير وان شاءالله يكون عام سعيد عليك، هاي هدية بسيطة ادري لكن سويتها عشان يكون عندك شي ترجعي الو بس تكوني زعلانة او متضايقة واتمنى تعجبك ❤️
          </p>
        </div>
      </div>
    </div>
  );
}
