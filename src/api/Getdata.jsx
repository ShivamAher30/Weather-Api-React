import React from "react"
// https://api.weatherapi.com/v1/current.json?key=1f1d9e33b14c40b18bf105724242003&q=London&aqi=yes
export async function  Getdata(city)
{
    var baseURL = "https://api.weatherapi.com/v1/current.json?key=1f1d9e33b14c40b18bf105724242003";
    const data =  await fetch(`${baseURL}&q=${city}&aqi=yes`)
    console.log("Thsi sis data",data);
    return data.json()

}
export async function  GetdatausingLocation(lat,long)
{
    var baseURL = "https://api.weatherapi.com/v1/current.json?key=1f1d9e33b14c40b18bf105724242003";
    const data =  await fetch(`${baseURL}&q=${lat},${long}&aqi=yes`)
    console.log("Thsi sis data",lat,long);
    return data.json()

}
