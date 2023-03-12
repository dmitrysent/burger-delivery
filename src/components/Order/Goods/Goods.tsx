import React, {useState} from 'react';
import Count from "../../Count/Count";
import classes from "./Goods.module.scss";

interface OrderProps {
    title: string
}
const Goods = ({title}: OrderProps) => {


    return (
        <li className={classes.item}>
            <img className={classes.image} src="../burger-delivery/src/assets/img/burger_1.jpg"
                 alt={title} />

            <div className={classes.goods}>
                <h3 className={classes.title}>{title}</h3>

                <p className={classes.weight}>512г</p>

                <p className={classes.price}>1279
                    <span className="currency">₽</span>
                </p>
            </div>

            <Count initCount={1} />
        </li>
    );
};

export default Goods;