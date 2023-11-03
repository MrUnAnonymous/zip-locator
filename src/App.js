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

  return (
    <div className="App">
      <div  className='main-container'>
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
              buttonClicked={buttonClicked}
              setButtonClicked={setButtonClicked}
            />
            <ClearButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
