import React from "react";

import styles from './PlayingField.module.css';

import testIds from "../App/testIs";


import { PlayingCell } from "../PlayingCell/PlayingCell";



export const PlayingField = () => {



    const cellCount = 9;

    const playingCellArr = [];

    let i = 0;

    while(i < cellCount){
        playingCellArr.push(<PlayingCell/>)
        i++
    }

    return (
        <div data-testid={testIds.playingField} className={styles.container}>
            {
                playingCellArr.map((item, index) => <PlayingCell key={index}/>)
            }
        </div>

    );
};



