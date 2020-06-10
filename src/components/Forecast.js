import React from 'react';
import Day from './Day';
const Forecast = ({location}) => {

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
        {console.log(days, "Days")}
    </div>
     );
}
 
export default Forecast;