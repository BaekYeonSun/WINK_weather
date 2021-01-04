import { React } from 'react';
import './Data.css';

export function Data(props){
    const imgSrc = 'http://openweathermap.com/img/w/'+(props.state.icon)+'.png';
    if (props.state.loading){
        return <p>Loading..</p>
    } else{
        return(
            <div className="App">
                <img src={imgSrc}/>
                <p>{props.state.temp} ℃</p>
                <p>{props.state.desc}</p>
            </div>
        )
    }
}