import React from 'react'

export default function llet() {
   
   
    let url = "https://leetcode-stat-api.herokuapp.com/";
    const res = await fetch(url+"hk_davy")
    const data = res.json();


      

  return (
    <div>{data[0]}</div>
  )
}
