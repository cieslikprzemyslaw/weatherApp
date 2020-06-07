import React from 'react';

const Hours = ({hours}) => {

    const hour = hours.map(element => {
        let time = element.$/60
        return(
            <div>
                <p>{`Time ${time < 10 ? "0"+time+":00":time+":00"}`}</p>
                <p>{`Temperature: ${element.T} Celcius`}</p>
                <p>{`Feel like temperature: ${element.F} Celcius`}</p>
                <p>{`Wind: ${element.S} mph`}</p>
                <p>{`Visibility: ${element.V} `}</p>
                <p>{`Max UV index: ${element.U} `}</p>
                <p>{`Precipitation Probability: ${element.Pp} %`}</p>
            </div>
        )
    })

    return ( 
        <div>
            <p>{hour}</p>
        </div>
     );
}
 
export default Hours;