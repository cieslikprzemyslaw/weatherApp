import React, { useState, useEffect } from 'react';
import Day from './Day';

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
            <h2>Please write location and click check</h2>
        )
    } else {
        const days = location.Period
        return (
            <div>
                <p>{location.name}</p>
                <p>{location.country}</p>
                {days.map(element => (
                    <Day 
                    key={element.value}
                    days={days}
                    hourlyForecast={element.Rep}
                    date={element.value}
                    />
                ))}
                {/* {console.log(location.Period)} */}
            </div>
        )
    }
}

export default Weather;