import React from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";

export default function Test(props) {
  function handleResponse(response) {
    alert(`The weather is ${response.data.city} is ${response.data.main}C`);
  }

  let apiKey = "b2a5adcct04b33178913oc335f405433";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <Audio
      height="80"
      width="80"
      radius="9"
      color="green"
      ariaLabel="loading"
      wrapperStyle
    />
  );
}
