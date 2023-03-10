import React from 'react';
import classes from "./Product.module.css";

interface ProductProps  {
    title: string;

}

const Product = ({ title }: ProductProps) => {
    return (
        <article className={classes.product}>
            <img src="../burger-delivery/src/assets/img/photo-1.jpg" alt={title}
                 className={classes.image} />

            <p className={classes.price}>550<span className={classes.currency}>₽</span></p>

            <h3 className={classes.title}>
                <button className={classes.detail}>{title}</button>
            </h3>

            <p className={classes.weight}>512г</p>

            <button className={classes.add} type="button">Добавить</button>
        </article>
    );
};

export default Product;