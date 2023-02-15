import React from "react";
import { useEffect } from "react";
import axios from "axios";

function TrumpTag(props) {
  const { actualTag, setActualTag } = props;
  const {tags, setTags} = props
  return (
    <div>
      {
        actualTag.length === 0?
        <p>No Tag about anyone- Trump is just being Trump</p>:
        actualTag.map((victim, index) => {
        
          return (
            <div key={index}>
            <p>Tags: {tags}</p>
            <p key={index}>
              What Trump said about:{" "}
              <a href={`${victim._links.self.href}`}>{victim.value}</a>
            </p>
            </div>
          );
        })}
      
      {/* {
      
      actualTag.map((victim, index) => {
        
        return (
          <p key={index}>
            What Trump said about:{" "}
            <a href={`${victim._links.self.href}`}>{victim.value}</a>
          </p>
        );
      })} */}
    </div>
  );
}

export default TrumpTag;
