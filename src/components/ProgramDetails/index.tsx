import { useState, useEffect } from "react";


export function ProgramDetails() {

  const [program, setProgram] = useState([])
  
  function getProgram() {
    fetch('https://epg-api.video.globo.com/programmes/1337?date=2022-09-18', {
      headers: {
        'Content-Type': 'application/json',
        // ":authority": "epg-api.video.globo.com"
        "access-control-allow-origin" : "*",
      },
      mode: 'cors',
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => console.log(data))
  }
  useEffect(() => {
    getProgram()
  }, [])

  return (
    <h1>helk</h1>
  )
}