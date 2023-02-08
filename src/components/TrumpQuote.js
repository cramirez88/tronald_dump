import React, { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment'

function TrumpQuote() {
  const [apiData, setApiData] = useState({})
  const [tweet, setTweeter] = useState('')
  const [time, setTime] = useState([])

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
      // console.log(res.data)
      setApiData(res.data)
      setTweeter(res.data._embedded.source[0])
      setTime(moment(res.data.appeared_at).format("MM-DD-YYYY"))
      
    })
    .catch(err => console.log(err))
  }, [])
  return (
    <div>
      <h3>"{apiData.value}"</h3>
      <p>Tags: {apiData.tags}</p>
      <p>Tweeted On: {time}</p>
      <p>Twitter Source: </p>
      <a href={`${tweet.url}`} target='_blank' rel='noreferrer'>View Tweet</a>
    </div>
  )
}

export default TrumpQuote