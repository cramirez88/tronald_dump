import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

function TrumpTag() {
  const [apiData, setApiData] = useState({})
  const [embedded, setEmbedded] = useState({})
  const [actualTag, setActualTag] = useState([])
  const [individualTags, setIndividualTags] = useState([])
 
const options = {
  method: 'GET',
  url: 'https://matchilling-tronald-dump-v1.p.rapidapi.com/tag',
  headers: {
    accept: 'application/hal+json',
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': 'matchilling-tronald-dump-v1.p.rapidapi.com'
  }
};

  // Calling API to get tags
  useEffect(() => {
    axios.request(options)
    .then(res => {
      setApiData(res.data)
      console.log(apiData)
      setEmbedded(res.data._embedded)
      console.log(embedded)
      setActualTag(res.data._embedded.tag)
      console.log(actualTag)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])
  return (
    <div>
      {
        actualTag.map((victim, index) => (
          <p key={index}>What Trump said about:  <a href={`${victim._links.self.href}`}>{victim.value}</a></p>
        ))
        
      }
      
    </div>
  )
}

export default TrumpTag