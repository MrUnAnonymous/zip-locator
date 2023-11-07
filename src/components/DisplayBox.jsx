import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const DisplayBox = ({
  searchText,
  buttonClicked,
  setButtonClicked,
  clear,
  setClear,
  setSearchText,
  loading,
  setLoading,
}) => {
  const [placeDetails, setPlaceDetails] = useState({
    postalCode: "",
    country: "",
    state: "",
    place: "",
  });

  useEffect(() => {
    if (clear) {
      setSearchText("");
      setPlaceDetails({
        postalCode: "",
        country: "",
        state: "",
        place: "",
      });
    }
  }, [clear]);

  const data = async () => {
    try {
      if (searchText === "") {
        return 0;
      }
      setPlaceDetails({
        postalCode: "",
        country: "",
        state: "",
        place: "",
      });

      let url = `http://api.zippopotam.us/in/${searchText}`;
      let response = await fetch(url);
      let responseData = await response.json();

      if (responseData) {
        setPlaceDetails({
          postalCode: searchText,
          country: responseData.country,
          state: responseData.places[0].state,
          place: responseData.places[0]["place name"],
        });
      }
    } catch (error) {
      toast.error("Incorrect Pincode.");
    } finally {
      setButtonClicked(false);
      setClear(false);
    }
  };

  useEffect(() => {
    if (buttonClicked === true) {
      console.log("BUTTON-->>>");
      data();
    }
  }, [buttonClicked]);

  useEffect(() => {
    data();
  }, []);

  return (
    <div className="display-container">
      <div className="data">
        <div className="content">
          <h4 className="label">Postal Code: </h4>
          <p className="info-pc">{placeDetails?.postalCode}</p>
        </div>
        <div className="content">
          <h4 className="label">Country: </h4>
          <p className="info-cntry">{placeDetails?.country}</p>
        </div>
        <div className="content">
          <h4 className="label">State: </h4>
          <p className="info-state">{placeDetails?.state}</p>
        </div>
        <div className="content">
          <h4 className="label">Place: </h4>
          <p className="info-place">{placeDetails?.place}</p>
        </div>
      </div>
    </div>
  );
};

export default DisplayBox;
