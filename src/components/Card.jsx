import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";
import { getDealers, getDealersKeyword, getDealersLatLong, updateLatLong, updateParams } from "../redux/dealerSlice";
import CardDetail from "./CardDetail";

export default function Card() {
  const [dealer, setDealer] = useState({});

  const { dealers, keyword, params, latlong } = useSelector((state) => state.dealer);
  const dispatch = useDispatch();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    // get GEOLocation
    navigator.geolocation.getCurrentPosition(function (position) {
      dispatch(updateLatLong(position.coords.latitude + "," + position.coords.longitude))
    });
  }, [dispatch]);

  useEffect(() => {
    if (keyword) {
      dispatch(
        getDealersKeyword({
          page: params.page,
          limit: params.limit,
          keyword: keyword,
        })
      );
    } else {
      if (latlong !== "") {
        dispatch(
          getDealersLatLong({
            page: params.page,
            limit: params.limit,
            latlong: latlong,
          })
        );
      } else {
        dispatch(
          getDealers({
            page: params.page,
            limit: params.limit,
          })
        );
      }
    }
  }, [dispatch, keyword, params, latlong]);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <>
      <div className="cards">
        {dealers.length > 0 &&
          dealers.map((dealer) => (
            <a
              onClick={() => {
                setDealer(dealer);
                openModal();
              }}
              className="card"
              key={dealer.id}
            >
              <div className="card__icon">
                <img src="/icon/pin-icon.svg" alt="pin icon" />
              </div>
              <div className="card__info">
                <h5 className="card__title">{dealer.title}</h5>
                <p className="card__address">{dealer.address}</p>
                <ul className="card__services">
                  {dealer.services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
      </div>
      <button className="btn" type="submit" onClick={() => dispatch(updateParams({ page: 1, limit: params.limit + 9 }))}>
        LOAD MORE
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        contentLabel="Modal Dealer Detail"
        className="modal"
        overlayClassName="modal__overlay"
      >
        {Object.keys(dealer).length > 0 && <CardDetail dealer={dealer} onClick={closeModal} />}
      </Modal>
    </>
  );
}
