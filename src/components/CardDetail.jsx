export default function CardDetail({ dealer, onClick }) {
  return (
    <>
      <a href="/#" className="modal__button-close" onClick={onClick}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.7436 1.90956L15.9857 0.151642L9.01633 7.12099L2.04698 0.151642L0.289062 1.90956L7.25841 8.87891L0.289062 15.8483L2.04698 17.6062L9.01633 10.6368L15.9857 17.6062L17.7436 15.8483L10.7743 8.87891L17.7436 1.90956Z"
            fill="black"
          />
        </svg>
      </a>
      <div className="modal__icon">
        <img src="/icon/pin-icon-active.svg" alt="pin icon active" />
      </div>
      <div className="modal__header">
        <ul className="modal__services">{dealer.services.length > 0 && dealer.services.map((service, index) => <li key={index}>{service}</li>)}</ul>
        <h2 className="modal__title">{dealer.title}</h2>
        <div className="modal__address">
          <p className="modal__address-info">{dealer.address}</p>
          <p className="modal__address-distance">{dealer.distance_km} Km</p>
        </div>
        <a href={`https://www.google.com/maps/dir/${dealer.city}/${dealer.latitude},${dealer.longitude}`} rel="noopener" target="_blank" className="modal__direction-button">
          <svg className="icon" width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.6278 2.45547L11.5406 2.47181L8.63331 3.59881L5.36664 2.45547L2.29598 3.48992C2.18164 3.52803 2.09998 3.62603 2.09998 3.75125V11.9833C2.09998 12.1357 2.21975 12.2555 2.3722 12.2555L2.45931 12.2391L5.36664 11.1121L8.63331 12.2555L11.704 11.221C11.8183 11.1829 11.9 11.0849 11.9 10.9597V2.7277C11.9 2.57525 11.7802 2.45547 11.6278 2.45547ZM8.63331 11.1666L5.36664 10.0178V3.54436L8.63331 4.69314V11.1666Z"
              fill="black"
            />
          </svg>
          View Direction
        </a>
        <div className="modal__button-group">
          <button className="btn-primary">Request Test Drive</button>
          <button className="btn-secondary">Book Service</button>
        </div>
      </div>
      <hr className="modal__border" />
      <div className="modal__detail">
        <div className="modal__showroom">
          <h4 className="modal__showroom-title">Showroom</h4>
          <ul className="modal__showroom-list">
            {dealer.showroom_operational_hours.length > 0 ? (
              dealer.showroom_operational_hours.map(({ days, hours }, index) => (
                <li key={index}>
                  {days} <span className="modal__spaces"></span> {hours}
                </li>
              ))
            ) : (
              <li>Showroom tidak tersedia</li>
            )}
          </ul>
        </div>
        <div className="modal__workshop">
          <h4 className="modal__workshop-title">Bengkel</h4>
          <ul className="modal__workshop-list">
            {dealer.bengkel_operational_hours.length > 0 ? (
              dealer.bengkel_operational_hours.map(({ days, hours }, index) => (
                <li key={index}>
                  {days} <span className="modal__spaces"></span> {hours}
                </li>
              ))
            ) : (
              <li>Bengkel tidak tersedia</li>
            )}
          </ul>
        </div>
      </div>
      <div className="modal__contact">
        <h4 className="modal__contact-title">Contact</h4>
        <p className="modal__contact-phone">
          <img className="modal__contact-icon" src="/icon/phone-icon.svg" alt="phone-icon" />
          {dealer.phone}
        </p>
        <p className="modal__contact-mail">
          <img className="modal__contact-icon" src="/icon/mail-icon.svg" alt="mail-icon" />
          {dealer.length > 0 ? dealer.mail : "-"}
        </p>
      </div>
    </>
  );
}
