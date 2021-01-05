import { React, useState } from 'react';
import './Forecast.css';

export function Forecast(props){
    const [state, setState] = useState({
        city: ''
    });

    const getValue = e => {
        const {name, value} = e.target;
        setState({
            ...state,
            [name]: value
        });
    };

    const handleClick = e => {
        props.readFunc(state.city);
        setState({
            city: ''
        });
    }

    return(
        <div className={"wrap"}>
            <h2>Current Weather Data</h2>
            <input
                name={"city"}
                type={"text"}
                placeholder={"Enter City"}
                maxLength={"50"}
                value={state.city}
                onChange={getValue}
            />
            <button type={"submit"} onClick={handleClick}>Get Forecast</button>
        </div>
    );
}