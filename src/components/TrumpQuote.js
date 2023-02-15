import React, { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment'

function TrumpQuote(props) {
  const {apiData, setApiData} = props
  const {quoteTweet, setQuoteTweet} = props
  const [tweet, setTweeter] = useState('')
  const [time, setTime] = useState([])
  const {tags, setTags} = props
  const { embedded, setEmbedded } = props;
  const { actualTag, setActualTag } = props;


  
  useEffect(() => {
    let options = {
      method: 'GET',
      url: 'https://matchilling-tronald-dump-v1.p.rapidapi.com/random/quote',
      headers: {
        Accept: 'application/hal+json',
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'matchilling-tronald-dump-v1.p.rapidapi.com'
      }
      
    };
    
    axios.all([axios.request(options),
      axios.request({...options, url: 'https://matchilling-tronald-dump-v1.p.rapidapi.com/tag'})])
.then(axios.spread((firstResponse, secondResponse) => {  
    console.log(firstResponse.data,secondResponse.data);
    setQuoteTweet(firstResponse.data)
        // console.log(quoteTweet)
        setTags(firstResponse.data.tags)
        console.log(` ${tags} hi `)
        setTweeter(firstResponse.data._embedded.source[0])
        setTime(moment(firstResponse.data.appeared_at).format("MM-DD-YYYY"))
        // SECOND CALL
        let filteredTagData = secondResponse.data._embedded.tag.filter(tag => tag.value === firstResponse.data.tags[0])
        console.log(filteredTagData)
        setActualTag(filteredTagData);
}))
.catch(error => console.log(error));

    }, [])



  
  return (
    <div>
      <h3>"{quoteTweet.value}"</h3>
      <p>Tags: {tags}</p>
      <p>Tweeted On: {time}</p>
      <p>Twitter Source: <a href={`${tweet.url}`} target='_blank' rel='noreferrer'>View Tweet</a></p>
      
    </div>
  )
}

export default TrumpQuote