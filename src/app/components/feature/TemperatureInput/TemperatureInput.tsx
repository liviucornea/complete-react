import React from 'react';
interface scaleTemp {
    c: string;
    f: string;
    [key: string] : string;
}

export const scaleNames: scaleTemp = {
    'c': 'Celsius',
    'f': 'Fahrenheit'
};
type Props = {onTemperatureChange: (temp: number) => void,
    temperature: string | number
                scale: string}


export function TemperatureInput(props: Props) {
 const handleChange = (e: any) => {
     props.onTemperatureChange(e.target.value)
 }
return ((
    <fieldset>
        <legend>Enter temperature in {scaleNames[props.scale]}:</legend>
        <input
            value={props.temperature}
            onChange={e => handleChange(e)} />
    </fieldset>
))
}