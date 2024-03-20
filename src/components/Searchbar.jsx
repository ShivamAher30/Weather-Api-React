import React from "react";
import { Getdata } from "../api/Getdata";
import { Button } from "./Button";
import { useWeatherContext } from "../context/Weathercontext";
export function Searchbar(props)

{
    const weather = useWeatherContext();

    
    return (
        <>
        <div className="wrap">
        <h1>Enter city name to get weather info</h1>
        <input className= "input-text" value={weather.city} onChange= {(e) => {weather.fetchdata(e.target.value)}} type="text"/>
        <Button item = "Submit" type = "Submit" />
        </div>
        
        </>
    )

}