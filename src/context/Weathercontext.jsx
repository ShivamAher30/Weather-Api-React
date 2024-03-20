
import React, { useContext, createContext, useState , useEffect} from "react";
import { Getdata,GetdatausingLocation } from "../api/Getdata";
const WeatherContext = createContext();

export const useWeatherContext = () => {return useContext(WeatherContext)};

export function WeatherProvider(props) {
    const [data, setData] = useState(null);
    const [city, setCity] = useState(null);
    
    
    const fetchdata = async function (city) {
        const response = await Getdata(city)
        setCity(city)
        setData(response)
        fetchCurrentUserLocation()
    }
    function fetchCurrentUserLocation()
    {
        navigator.geolocation.getCurrentPosition((e)=>{fetchdatausingLocation(e.coords.latitude,e.coords.longitude)})
    }
    const fetchdatausingLocation = async function (lat,long) {
        console.log(lat,long);
        const response = await GetdatausingLocation(lat,long)
        setCity(response?.location?.region)
        setData(response)
    }

    return (
        <WeatherContext.Provider value={{ data, city,setData,setCity,fetchdata,fetchCurrentUserLocation }}>
            {props.children}
        </WeatherContext.Provider>
    );
}
