import React from "react";
import { useWeatherContext } from "../context/Weathercontext";
export function Card(props) {
    const Useweather = useWeatherContext();
    console.log("Thsi sis useweather", Useweather);

    return (

        <div className="Card">
            <img src={Useweather?.data?.current?.condition?.icon} alt="" height="230px" width="230px"/>
            <h3>{Useweather?.data?.current?.temp_c}</h3>
     
                <h4>{Useweather?.data?.location?.name}</h4>
                <h4 >{Useweather?.data?.location?.region}</h4>
            
        </div>
    )

}