import Search from './components/Search';
import './App.css';
import TrumpQuote from './components/TrumpQuote';
import TrumpTag from './components/TrumpTag';
import {useState} from 'react'

function App() {
  const [apiData, setApiData] = useState({})
  // const [apiData, setApiData] = useState({})
  const [embedded, setEmbedded] = useState({})
  const [actualTag, setActualTag] = useState([])
  return (
    <div className="App">
      <Search/>
      <TrumpQuote apiData={apiData} setApiData={setApiData}
                  embedded={embedded} setEmbedded={setEmbedded}
                  actualTag={actualTag} setActualTag={setActualTag}
      />
      <TrumpTag apiData={apiData} setApiData={setApiData}
                embedded={embedded} setEmbedded={setEmbedded}
                actualTag={actualTag} setActualTag={setActualTag}
      />
    </div>
  );
}

export default App;
