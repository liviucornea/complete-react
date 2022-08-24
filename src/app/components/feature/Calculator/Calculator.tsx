import React, {useState} from 'react';
import {BoilingVerdict} from "../TemperatureInput/BoilingVerdict/BoilingVerdict";
import {TemperatureInput} from "../TemperatureInput/TemperatureInput";

export default function Calculator() {
    const [temperature, setTemperature] = useState(99);
    const [scale, setScale] = useState('c');

   const handleCelsiusChange = (temperature: number) =>  {
        setTemperature( temperature);
       setScale('c');
    }

   const  handleFahrenheitChange = (temperature: number) => {
       setTemperature( temperature);
       setScale('f');
    }

    const celsius = scale === 'f' ? tryConvert(temperature.toString(), toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature.toString(), toFahrenheit) : temperature;
    return (<div className="Calculator">
            <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange} />
            <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange} />
                <BoilingVerdict
                    celsius={parseFloat(celsius.toString())} />
        </div>
        );
}


function toCelsius(fahrenheit: number) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius: number) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature: string, convert : (t: number)=> number) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}