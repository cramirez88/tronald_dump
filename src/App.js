import Search from './components/Search';
import './App.css';
import TrumpQuote from './components/TrumpQuote';
import {useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const [apiData, setApiData] = useState({})
  // const [apiData, setApiData] = useState({})
  const [embedded, setEmbedded] = useState({})
  const [actualTag, setActualTag] = useState([])
  const [quoteTweet, setQuoteTweet] = useState({})
  const [tags, setTags] = useState([])

  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route element={<Search/>} path={'/'}></Route>
      <Route element={<TrumpQuote 
        apiData={apiData} setApiData={setApiData}
        embedded={embedded} setEmbedded={setEmbedded}
        actualTag={actualTag} setActualTag={setActualTag}
        quoteTweet={quoteTweet} setQuoteTweet={setQuoteTweet}
        tags={tags} setTags={setTags}
      />} path={'/quote'}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
