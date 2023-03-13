import React from 'react';
import classes from "./Product.module.css";
import {Products} from "../../../store/products/productsSlice";
import {API_URL} from "../../../consts";


interface IProps {
    item: Products
}


const Product = ({ item }: IProps) => {

    return (
        <article className={classes.product}>
            <img src={`${API_URL}/${item.image}`} alt={item.title}
                 className={classes.image} />

            <p className={classes.price}>{item.price}<span className={classes.currency}>₽</span></p>

            <h3 className={classes.title}>
                <button className={classes.detail}>{item.title}</button>
            </h3>

            <p className={classes.weight}>{item.weight}г</p>

            <button className={classes.add} type="button">Добавить</button>
        </article>
    );
};

export default Product;