import React, { useState } from 'react';

const Form = ({setIdCity, data}) => {

    const [cityName, setCityName] = useState('');
    
    const findId = (e) =>{
        const cities = data.Locations.Location;
        cities.forEach(city => {
        const userInput = cityName.toLowerCase();
        const dataCitiesName = city.name.toLowerCase();

            if(userInput === dataCitiesName){
                console.log(city.name, city.id)
                return setIdCity(city.id)
            }
        });
    }

    const handleClick = (e) => {
        e.preventDefault();
        findId();
    }

    const handleChange = e => {
        setCityName(e.target.value)
    }
    
    return (
        <form className="form">
            <label htmlFor="location">Location: </label>
            <input 
            onChange={handleChange} 
            type="text" 
            name="location" 
            id="location" />
            <button onClick={handleClick}>Check</button>
        </form>
    );
}

export default Form;
