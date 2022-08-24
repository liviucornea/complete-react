import React from 'react'
import styles from './Footer.module.css'
import TriangleCss from '../triangle-css/triangle-css';



export function Footer() {
    let mainClass = [styles.mainFooter + ' container'].join(' ');
    return (<div className={mainClass}>
        <hr />
        <div>
            <TriangleCss />
        </div>
        <span>Learn React JS</span>
        <a className="App-link"
           href="https://reactjs.org/"
           target="_blank"
           rel="noopener noreferrer">
            React
        </a>
        <span>, </span>
        <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
        >
            Redux
        </a>
        <span>, </span>
        <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
        >
            Redux Toolkit
        </a>
        ,<span> and </span>
        <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
        >
            React Redux
        </a>
    </div>)
}
