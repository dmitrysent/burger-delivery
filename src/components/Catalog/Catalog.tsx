import React from 'react';
import Order from "../Order/Order";
import Container from "../Container/Container";
import classes from "./Catalog.module.css";
import Product from "./Product/Product";
import {useSelector} from "react-redux";
import { categorySelector} from "../../store/category/categorySlice";
import {useAppSelector} from "../../store/hooks";

const goodsList = [
    { title: 'Мясная бомба' },
    { title: 'Супер сырный' },
    { title: 'Сытный' },
    { title: 'Итальянский' },
    { title: 'Вечная классика' },
    { title: 'Тяжелый удар' },
];

const Catalog = () => {


    return (
        <section className={classes.catalog}>
            <Container className={classes.container}>
                <Order />

                <div className={classes.wrapper}>
                    <h2 className={classes.title}>Бургеры</h2>

                    <div className={classes.wrap_list}>
                        <ul className={classes.list}>
                            {
                                goodsList.map(item => (
                                    <li key={item.title} className={classes.item}>
                                        <Product title={item.title} />
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Catalog;