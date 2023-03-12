import React, {useState} from 'react';
import classes from "./Count.module.scss";

interface CountProps {
    initCount: number
}

const Count = ({initCount}: CountProps) => {

    const [count, setCount] = useState<number>(initCount)

    const increment = () => {
        setCount(prev => prev + 1)
    }
    const decrement = () => {
        if (count > 1) {
            setCount(prev => prev - 1)
        }
    }

    return (
        <div className={classes.count}>
            <button
                className={classes.minus}
                onClick={decrement}
                disabled={count === 1}
            >-</button>
            <p className={classes.amount}>{count}</p>
            <button className={classes.plus} onClick={increment}>+</button>
        </div>
    );
};

export default Count;