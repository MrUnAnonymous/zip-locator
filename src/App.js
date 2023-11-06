import './App.css';
import './styles.css'
import SearchBar from './components/SearchBar';
import DisplayBox from './components/DisplayBox';
import ClearButton from './components/ClearButton';
import { Toaster } from 'react-hot-toast';
import { useState } from 'react';

function App() {

  const [searchText, setSearchText] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);
  const [clear , setClear ] = useState(false);

  return (
    <div className="App">
      <div  className='main-container'>
        <img
          src=  "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bG9jYXRpb258ZW58MHx8MHx8fDA%3D"
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
          />
          <div className=''>
            <DisplayBox 
              searchText={searchText}
              setSearchText={setSearchText}
              buttonClicked={buttonClicked}
              setButtonClicked={setButtonClicked}
              clear={clear}
              setClear={setClear}
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
