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
