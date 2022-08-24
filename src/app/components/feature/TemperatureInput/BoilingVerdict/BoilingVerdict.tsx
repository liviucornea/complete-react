import React  from 'react';
type Props = {celsius: number | string}


export function BoilingVerdict(props: Props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}