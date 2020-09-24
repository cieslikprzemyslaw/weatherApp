import React, { useState, useEffect } from 'react';
import Forecast from './Forecast';

const Weather = ({ idCity, url, apiKey }) => {

    const [location, setLocation] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(url + `/${idCity}?res=3hourly&` + apiKey)
            .then(response => response.json())
            .then(data => {
                setLocation(data.SiteRep.DV.Location);
                setIsLoading(false)
            })
    }, [apiKey, idCity, url])

    if (isLoading) {
        return (
            <h2 className="weather__h2">Please write location and click check</h2>
        )
    } else {
        return (
            <Forecast 
            location={location}
            
            />
        )
    }
}
// //Bug is with rerender should be days.map(element => {
//     element.Rep.map(day => )
// }) 

export default Weather;