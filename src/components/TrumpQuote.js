import React, { useEffect, useState } from 'react'
import axios from 'axios'


function TrumpQuote() {
  const [apiData, setApiData] = useState({})


  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://matchilling-tronald-dump-v1.p.rapidapi.com/random/quote',
      headers: {
        Accept: 'application/hal+json',
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'matchilling-tronald-dump-v1.p.rapidapi.com'
      }
      
    };
  
    axios.request(options)
    .then(res => {
      console.log(res.data)
      setApiData(res.data)
    })
    .catch(err => console.log(err))
  }, [])
  return (
    <div>
      <h1>{apiData.value}</h1>
    </div>
  )
}

export default TrumpQuote