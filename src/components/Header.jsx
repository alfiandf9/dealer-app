import Select from "react-select";
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { updateKeyword, updateParams } from "../redux/dealerSlice";

export default function Header() {
  const [provinces, setProvinces] = useState([]);
  const [currentKeyword, setCurrentKeyword] = useState();
  const selectInputRef = useRef();

  const {latlong, keyword} = useSelector((state) => state.dealer)
  const dispatch = useDispatch();

  // get-provinces
  useEffect(() => {
    axios
      .get("https://mitsubishi-50.sudahdistaging.in/api/frontend/get-provinces")
      .then(function (response) {
        setProvinces(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // setting options for react-select
  let options = provinces.map(function (province) {
    return { value: province.id, label: province.name };
  });

  function handlePageLimit(e) {
    if(e){
      if (currentKeyword !== e.label) {
        dispatch(updateParams({ page: 1, limit: 9 }));
        setCurrentKeyword(e.label);
      }
    }
  }

  function handleChange(e) {
    e && dispatch(updateKeyword(e.label))
  }

  function handleSetDefault() {
    dispatch(updateKeyword(""));
    selectInputRef.current.clearValue()
  }

  return (
    <section className="header">
      <div>
        <div className="header__info">
          <h1 className="header__title">FIND DEALER</h1>
          <p className="header__description">Cari dan kunjungi dealer resmi Mitsubishi terdekat di kota Anda untuk mendapatkan pelayanan terbaik terkait dengan kendaraan dari Mitsubishi Motors Indonesia.</p>
        </div>
        <div className="header__search">
          <label htmlFor="search-location" className="header__search-location">
            Discover the nearest dealership in your area
          </label>
          <Select
            ref={selectInputRef}
            name="province"
            id="search-location"
            onChange={(e) => {
              handleChange(e);
              handlePageLimit(e);
            }}
            options={options}
            placeholder="Pilih Lokasi Terdekat"
          />
          {keyword && latlong && (
            <a className="header__search-clear" onClick={handleSetDefault}>
              <img src="/icon/location-icon.svg" alt="location-icon" />
              Gunakan lokasi saya saat ini
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
