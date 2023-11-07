import './App.css';
import './styles.css'
import SearchBar from './components/SearchBar';
import DisplayBox from './components/DisplayBox';
import ClearButton from './components/ClearButton';
import { Toaster } from 'react-hot-toast';
import { useState } from "react";


function App() {
  const [loading, setLoading] = useState(false);  
  const [searchText, setSearchText] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);
  const [clear , setClear ] = useState(false);

  return (
    <div className="App">
      <div  className='main-container'>
        <img
          src="https://plus.unsplash.com/premium_photo-1681433394443-f00c5d39087e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fG1hcHxlbnwwfHwwfHx8MA%3D%3D"
          alt='Background'
          className='bg-image'  
        /> 
        <div className='card'>
          <Toaster />
          <SearchBar 
            searchText={searchText} 
            setSearchText={setSearchText}
            buttonClicked={buttonClicked}
            setButtonClicked={setButtonClicked}
            loading={loading}
            setLoading={setLoading}
          />
          <div className=''>
            <DisplayBox 
              searchText={searchText}
              setSearchText={setSearchText}
              buttonClicked={buttonClicked}
              setButtonClicked={setButtonClicked}
              clear={clear}
              setClear={setClear}
              loading={loading}
              setLoading={setLoading}
            />
            <ClearButton 
              clear={clear}
              setClear={setClear}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
