import React, { useState } from 'react';
import { Forecast } from "./Forecast";
import { Data } from "./Data";

export function Weather(){
    const [state, setState] = useState({
        city: '', temp: 0, desc: '', icon: '', loading: true
    });

    async function readWeather(city) {
        const cityName = city;
        const apiKey = '314a9a0d6638443c86837557d2ed0ccf';
        const url = 'http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid='+apiKey;

        await fetch(url)
            .then(
                function (response) {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                    }
                    response.json().then( function (data) {
                        setState({
                            city: cityName,
                            temp: data["main"]["temp"],
                            desc: data["weather"][0]["description"],
                            icon: data["weather"][0]["icon"],
                            loading: false
                        });
                    })
                }
            )
            .catch(function (error) {
                console.log('Fetch Error : -S', error)
            });
    }

    return <>
        <Forecast
            readFunc = {readWeather}
        />
        <div>
            <Data
                state = {state}
            />
        </div>
    </>;
}