export default function Chatbot() {
  return (
    <div className="chatbot">
      <div className="chatbot__button">
        <svg className="chatbot__close" width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.7436 1.90956L15.9857 0.151642L9.01633 7.12099L2.04698 0.151642L0.289062 1.90956L7.25841 8.87891L0.289062 15.8483L2.04698 17.6062L9.01633 10.6368L15.9857 17.6062L17.7436 15.8483L10.7743 8.87891L17.7436 1.90956Z"
            fill="white"
          />
        </svg>
        <p className="chatbot__title">Ask MIRA</p>
        <img src="/MIRA.png" alt="mira" className="chatbot__mira" />
      </div>
    </div>
  );
}
