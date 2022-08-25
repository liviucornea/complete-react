import React from 'react';
import './_triangle-css.scss';


type Props = { orientation : string}
/*
this is just a presentation component , to proof that you can built a triangle with css
... main code/ideas sits in ./_triangle-css.scss
 */
// eslint-disable-next-line 
export default function TriangleCss({orientation}: Props) {
    let triangleClass = ['triangle-css' , ' orientation-' + orientation].join(' ');
    return (<div className={triangleClass}>
    </div>);
}
