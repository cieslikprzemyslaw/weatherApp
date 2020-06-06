import React, { useState, useEffect } from 'react';

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
    }, [idCity])

    if (isLoading) {
        return (
            <h2>Please write location and click check</h2>
        )
    } else {
        return (
            <div>
                <p>{location.name}</p>
                <p>{location.country}</p>
                {console.log(location.Period)}
            </div>
        )
    }
}

export default Weather;