export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <a href="/#">
          <img src="/Logo.svg" alt="logo" />
        </a>
      </div>
      <div className="navbar__link">
        <ul>
          <li>
            <a href="/#">
              <img src="/Euro4-logo.png" alt="Euro-4 Logo" />
            </a>
          </li>
          <li>
            <a href="/#">
              About Us
              <img src="/bottom-arrow-icon.svg" alt="arrow-icon" />
            </a>
          </li>
          <li>
            <a href="/#">
              Explore Cars
              <img src="/bottom-arrow-icon.svg" alt="arrow-icon" />
            </a>
          </li>
          <li>
            <a href="/#">
              Promo
              <img src="/bottom-arrow-icon.svg" alt="arrow-icon" />
            </a>
          </li>
          <li>
            <a href="/#">
              News & Event
              <img src="/bottom-arrow-icon.svg" alt="arrow-icon" />
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar__button">
        <a href="/#">
          <img src="/burger-button.svg" alt="burger-button" />
        </a>
      </div>
    </nav>
  );
}
