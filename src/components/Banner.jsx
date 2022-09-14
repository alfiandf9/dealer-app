export default function Banner() {
  return (
    <section className="banner">
      <div className='banner__mask'></div>
      <div className="banner__info">
        <h1 className='banner__title'>Live Simple With My Mitsubishi</h1>
        <p className='banner__description'>Nikmati semua fasilitas berkendara Mitsubishi, dari book test drive hingga service berkala langsung dari tangan Anda dengan My Mitsubishi ID. </p>
        <p className='banner__description-sub'>Download aplikasinya sekarang di App Store dan Play Store.</p>
      </div>
      <div className='banner__button'>
        <a href="/#">
          <img src="/googleplay-button.png" alt="googleplay-button" />
        </a>
        <a href="/#">
          <img src="/appstore-button.png" alt="appstore-button" />
        </a>
      </div>
    </section>
  );
}
