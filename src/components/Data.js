import { React } from 'react';
import './Data.css';

export function Data(props){
    const imgSrc = 'http://openweathermap.com/img/w/'+(props.state.icon)+'.png';
    const temp = Math.round(parseFloat(props.state.temp)-273.15);
    const weather = (props.state.desc).toUpperCase();
    const city = (props.state.city).toUpperCase();
    if (props.state.loading){
        return <p>Loading..</p>
    } else{
        return(
            <div className={"wrap"}>
                <img src={imgSrc} alt={"description"}/>
                <p>Temperature of {city} : {temp} °</p>
                <p>Weather in {city} : {weather}</p>
            </div>
        )
    }
}