import React, { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment'
import { Card } from '@mui/material'
import { Link } from 'react-router-dom'
import Search from './Search'

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
        // console.log(` ${tags} hi `)
        setTweeter(firstResponse.data._embedded.source[0])
        setTime(moment(firstResponse.data.appeared_at).format("MM-DD-YYYY"))
        // SECOND CALL
        let filteredTagData = secondResponse.data._embedded.tag.filter(tag => tag.value === firstResponse.data.tags[0])
        // console.log(filteredTagData)
        setActualTag(filteredTagData);
}))
.catch(error => console.log(error));
    }, [])



  
  return (
    <div>
      <Link to={'/'}>Go Back</Link>
      <h3>"{quoteTweet.value}"</h3>
      <Card variant="outlined">Tweeted On: {time}</Card>
      <Card variant='outlined'>Twitter Source: <a href={`${tweet.url}`} target='_blank' rel='noreferrer'>View Tweet</a></Card>
      {
        actualTag.length === 0?
        <p>No Tag about anyone- Trump is just being Trump</p>:
        actualTag.map((victim, index) => {
        
          return (
            <div key={index}>
            <Card>Tags: {tags}</Card>
            <Card key={index}>
              What Trump said about:{" "}
              <a href={`${victim._links.self.href}`}>{victim.value}</a>
            </Card>
            </div>
          );
        })}
      
      
    </div>
  )
}

export default TrumpQuote