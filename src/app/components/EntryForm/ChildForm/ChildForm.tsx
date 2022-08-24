import React, {useRef} from 'react';

type Props = {
    name: string
    sendToHost: (name: string) => void
}

export function ChildForm(props: Props) {
    let mainCssClass = 'container';
    const nameEl = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        console.log('Name is', nameEl.current?.value);
        props.sendToHost(nameEl.current?.value ? nameEl.current?.value : '');
    }
    const content =
    (<div className={mainCssClass}>
        <div><span>Child Form</span></div>
        <div>
            <label> Name is</label><input ref={nameEl} defaultValue={props.name}/>
        </div>
        <button onClick={handleClick}> Send to parent</button>
    </div>);
    return content;
}