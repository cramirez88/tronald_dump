import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'react-router-dom'


function TrumpQuote() {
  const [apiData, setApiData] = useState({})
  const [tweet, setTweeter] = useState('')

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
      setTweeter(res.data._embedded.source[0])
    })
    .catch(err => console.log(err))
  }, [])
  return (
    <div>
      <h3>{apiData.value}</h3>
      <p>Tags: {apiData.tags}</p>
      {/* <a href={apiData._embedded.source[0].url}>Trump's Twitter</a> */}
      <p>Twitter Source: </p>
      <a href={`${tweet.url}`}>{tweet.url}</a>
    </div>
  )
}

export default TrumpQuote