import React, { useState } from 'react';

const Hours = ({ hours }) => {


    const hour = hours.map(element => {
        let temperature;
        let wind;
        let visibility;
        let UV;
        let time;
        let pop;

        switch (element.V) {
            case "VP":
                visibility = "Very poor - less than 1 km "
                break;
            case "PO":
                visibility = "Poor - Between 1-4 km "
                break;
            case "MO":
                visibility = "Moderate - Between 4-10 km"
                break;
            case "GO":
                visibility = "Good - Between 10-20 km"
                break;
            case "VG":
                visibility = "Very good - Between 20-40 km"
                break;
            case "EX":
                visibility = "Excellent - More than 40 km"
                break;

            default:
                visibility = "Unknown"
                break;
        }
        if (element.U <= 2) {
            UV = "Low exposure. No protection required. You can safely stay outside"
        } else if (element.U > 2 && element.U < 5) {
            UV = "Moderate exposure. Seek shade during midday hours, cover up and wear sunscreen"
        } else if (element.U === 6 || element.U === 7) {
            UV = "High exposure. Seek shade during midday hours, cover up and wear sunscreen"
        } else if (element.U >= 8 && element.U < 11) {
            UV = "Very high. Avoid being outside during midday hours. Shirt, sunscreen and hat are essential"
        } else {
            UV = "Extreme. Avoid being outside during midday hours. Shirt, sunscreen and hat essential."
        }

        temperature = element.T;
        time = element.$ / 60;
        wind = element.S;
        pop = element.Pp;

        return (
            <div className="forecast__hour">
                <p className="forecast__data">Time {time < 10 ? "0" + time + ":00" : time + ":00"}</p>
                <p className="forecast__data">Temperature: {temperature} Celcius</p>
                <p className="forecast__data">Wind: {wind} mph</p>
                <p className="forecast__data">Visibility: {visibility}</p>
                <p className="forecast__data">Max UV index: {UV}</p>
                <p className="forecast__data">Precipitation Probability: {pop} %</p>
            ----------------------------------------------
            </div>
        )
    })

    return (
        <>
        { hour }
        </>
    );
}

export default Hours;