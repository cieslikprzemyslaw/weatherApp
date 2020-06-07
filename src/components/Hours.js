import React, { useState } from 'react';

const weatherTypes = [
{id:0, weather:"Clear night"},
{id:1, weather:"Sunny day"},
{id:2, weather:"Partly cloudy (night)"},
{id:3, weather:"Partly cloudy (day)"},
{id:4, weather:"Not used"},
{id:5, weather:"Mist"},
{id:6, weather:"Fog"},
{id:7, weather:"Cloudy"},
{id:8, weather:"Overcast"},
{id:9, weather:"Light rain shower (night)"},
{id:10, weather:"Light rain shower (day)"},
{id:11, weather:"Drizzle"},
{id:12, weather:"Light rain"},
{id:13, weather:"Heavy rain shower (night)"},
{id:14, weather:"Heavy rain shower (day)"},
{id:15, weather:"Heavy rain"},
{id:16, weather:"Sleet shower (night)"},
{id:17, weather:"Sleet shower (day)"},
{id:18, weather:"Sleet"},
{id:19, weather:"Hail shower (night)"},
{id:20, weather:"Hail shower (day)"},
{id:21, weather:"Hail"},
{id:22, weather:"Light snow shower (night)"},
{id:23, weather:"Light snow shower (day)"},
{id:24, weather:"Light snow"},
{id:25, weather:"Heavy snow shower (night)"},
{id:26, weather:"Heavy snow shower (day)"},
{id:27, weather:"Heavy snow"},
{id:28, weather:"Thunder shower (night)"},
{id:29, weather:"Thunder shower (day)"},
{id:30, weather:"Thunder"},
]

const Hours = ({hours}) => {

    const [weatherType, setWeatherType] = useState('');

    

    const hour = hours.map(element => {
        let visibility;
        let UV; 
        let time = element.$/60;
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
        if(element.U <=2){
            UV = "Low exposure. No protection required. You can safely stay outside"
        }else if(element.U > 2 && element.U <5){
            UV = "Moderate exposure. Seek shade during midday hours, cover up and wear sunscreen"
        }else if(element.U === 6 || element.U ===7){
            UV = "High exposure. Seek shade during midday hours, cover up and wear sunscreen"
        }else if(element.U >= 8 && element.U <11){
            UV = "Very high. Avoid being outside during midday hours. Shirt, sunscreen and hat are essential"
        }else{
            UV = "Extreme. Avoid being outside during midday hours. Shirt, sunscreen and hat essential."
        }

        return(
            <div>
                <p>{`Time ${time < 10 ? "0"+time+":00":time+":00"}`}</p>
                <p>{`Temperature: ${element.T} Celcius`}</p>
                <p>{`Feel like temperature: ${element.F} Celcius`}</p>
                <p>{`Wind: ${element.S} mph`}</p>
                <p>{`Weather Type: ${element.W} `}</p>
                <p>{`Visibility: ${visibility} `}</p>
                <p>{`Max UV index: ${UV} `}</p>
                <p>{`Precipitation Probability: ${element.Pp} %`}</p>
            </div>
        )
    })

    return ( 
            <p>{hour}</p>
     );
}
 
export default Hours;