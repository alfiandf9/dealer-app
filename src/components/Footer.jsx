export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__links">
        <a href="/#">
          <img src="/icon/point-icon.svg" alt="icon" />
          <p>Find Dealer</p>
        </a>

        <a href="/#">
          <img src="/icon/download-icon.svg" alt="icon" />
          <p>Brochure Download</p>
        </a>

        <a href="/#">
          <img src="/icon/car-icon.svg" alt="icon" />
          <p>Test Drive</p>
        </a>

        <a href="/#">
          <img src="/icon/credit-icon.svg" alt="icon" />
          <p>Credit Simulation</p>
        </a>

        <a href="/#">
          <img src="/icon/clipboard-icon.svg" alt="icon" />
          <p>Purchase Consultation</p>
        </a>
      </div>
      <div className="footer__close">
        <a href="/#">
          <img src="/icon/close-footer-icon.svg" alt="close icon" />
        </a>
      </div>
    </footer>
  );
}
