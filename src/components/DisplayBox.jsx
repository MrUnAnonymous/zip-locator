import React from 'react'
import toast from 'react-hot-toast'

const DisplayBox = ( { searchText , buttonClicked, setButtonClicked }) => {
  const data = async() => {
    try {
      const element = searchText
      console.log("ELEMENT" ,element)
      
      if (element[0].value === ""){
        return 0;
      } 
      
      let url = `http://api.zippopotam.us/in/${element}`
      let response = await fetch(url);
      let responseData = await response.json();
      console.log(responseData);

      const postalCode = document.getElementsByClassName("info-pc");
      const country = document.getElementsByClassName("info-cntry");
      const state = document.getElementsByClassName("info-state");
      const place = document.getElementsByClassName("info-place");

      postalCode[0].innerHTML = searchText;
      country[0].innerHTML = responseData.country;
      state[0].innerHTML = responseData.places[0].state;
      place[0].innerHTML = responseData.places[0].placename;

      if(data){
        setButtonClicked(false);
      }

    } catch (error) {
      toast.error("Incorrect Pincode.");
    }
  }

  if ( buttonClicked === true ) {
    console.log("BUTTON-->>>")
    data();
  }
  return (
    <div className='display-container'>
      <div className='data'>
        <div className='content'>
          <h4 className='label'>Postal Code: </h4>
          <p className='info-pc'></p>
        </div>
        <div className='content'>
          <h4 className='label'>Country: </h4>
          <p className='info-cntry'></p>
        </div>
        <div className='content'>
          <h4 className='label'>State: </h4>
          <p className='info-state'></p>
        </div>
        <div className='content'>
          <h4 className='label'>Place: </h4>
          <p className='info-place'></p>
        </div>
      </div>
    </div>
  )
}

export default DisplayBox