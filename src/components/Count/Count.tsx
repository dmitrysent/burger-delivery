import React from 'react';
import classes from "./Count.module.scss";

const Count = () => {
    return (
        <div className={classes.count}>
            <button className={classes.minus}>-</button>
            <p className={classes.amount}>1</p>
            <button className={classes.plus}>+</button>
        </div>
    );
};

export default Count;