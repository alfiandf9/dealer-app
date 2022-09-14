export default function Contact() {
  return (
    <section className="contact">
      <hr className="contact__border-top" />
      <p className='contact__title'>Stay Connected With Us</p>
      <div className="contact__icon">
        <a href="/#">
          <img src="/icon/facebook.svg" alt="facebook-icon" />
        </a>
        <a href="/#">
          <img src="/icon/twitter.svg" alt="twitter-icon" />
        </a>
        <a href="/#">
          <img src="/icon/instagram.svg" alt="instagram-icon" />
        </a>
        <a href="/#">
          <img src="/icon/youtube-play.svg" alt="youtube-icon" />
        </a>
        <a href="/#">
          <img src="/icon/mail_outline.svg" alt="mail-icon" />
        </a>
      </div>
      <p className='contact__info'>Contact Us</p>
      <hr className='contact__border-bottom' />
      <p className='contact__copyright'>Copyright © 2021. <br /> PT Mitsubishi Motors Krama Yudha Sales Indonesia</p>
    </section>
  );
}
