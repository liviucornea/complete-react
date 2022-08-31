import React from 'react';
import styles from './flipCardFigure.module.scss'

type Props = {
    titleFront: string,
    titleBack: string
}

export default function FlipCardFigure(props: Props) {
    console.log('FlipCardFigure code is executet');
    return (
        <div className={styles.container}>
            <span>This is a flip card component</span>
            <span>Please mouse over!</span>
            <div className={styles['card-container']}>
                <div className={styles.card}>
                    <figure className={styles.front}>
                        <h1>{props.titleFront}</h1>
                    </figure>
                    <figure className={styles.back}>
                        <h1>{props.titleBack}</h1>
                    </figure>
                </div>
            </div>
        </div>);
}
