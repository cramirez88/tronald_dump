import React from "react";
import { useEffect } from "react";
import axios from "axios";

function TrumpTag(props) {
  const { apiData, setApiData } = props;
  const { embedded, setEmbedded } = props;
  const { actualTag, setActualTag } = props;
  const { tags, setTags } = props;

  const options = {
    method: "GET",
    url: "https://matchilling-tronald-dump-v1.p.rapidapi.com/tag",
    headers: {
      accept: "application/hal+json",
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "matchilling-tronald-dump-v1.p.rapidapi.com",
    },
  };

  // Calling API to get tags
  useEffect(() => {
    axios
      .request(options)
      .then((res) => {
        setApiData(res.data);
        // console.log(apiData);
        setEmbedded(res.data._embedded);
        // console.log(embedded);
        let filteredTagData = res.data._embedded.tag.filter(tag => tag.value === tags[0])
        console.log(filteredTagData + 'hi')
        setActualTag(filteredTagData);
        console.log(actualTag);
        // console.log(tags)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // useEffect(() => {
  //   console.log(tags)
  //   console.log(`actual state changed`)
  //   // console.log(tags[0])
  //   console.log(actualTag)
  //   let filteredTagData = actualTag.filter(tag => tag.value === tags[0])
  //   console.log(filteredTagData)
  //   setActualTag(filteredTagData);
  // },[tags])

  return (
    <div>
      {
      
      actualTag.map((victim, index) => {
        
        return (
          <p key={index}>
            What Trump said about:{" "}
            <a href={`${victim._links.self.href}`}>{victim.value}</a>
          </p>
        );
      })}
    </div>
  );
}

export default TrumpTag;
