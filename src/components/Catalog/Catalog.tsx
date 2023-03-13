import React, {useEffect} from 'react';
import Order from "../Order/Order";
import Container from "../Container/Container";
import classes from "./Catalog.module.css";
import Product from "./Product/Product";
import {useSelector} from "react-redux";
import { categorySelector} from "../../store/category/categorySlice";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {Products, productsRequestAsync, productsSelector} from "../../store/products/productsSlice";

const Catalog = () => {

    const { products } = useAppSelector(productsSelector)
    const { category, activeCategory } = useAppSelector(categorySelector)

    const dispatch = useAppDispatch()

    useEffect(() => {

        if (category.length) {
            const activeCategoryTitle = category[activeCategory]?.title
            dispatch(productsRequestAsync(activeCategoryTitle))
        }
    }, [category, activeCategory])

    if (!products) {
        return <p>Загрузка товаров...</p>
    }

    return (
        <section className={classes.catalog}>
            <Container className={classes.container}>
                <Order />

                <div className={classes.wrapper}>
                    <h2 className={classes.title}>{category[activeCategory]?.rus}</h2>

                    <div className={classes.wrap_list}>
                        <ul className={classes.list}>
                            {
                                products.map((item: Products) => (
                                    <li key={item.id} className={classes.item}>
                                        <Product item={item} />
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