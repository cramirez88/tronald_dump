import React from "react";
import { useEffect } from "react";
import axios from "axios";

function TrumpTag(props) {
  const { actualTag, setActualTag } = props;
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
