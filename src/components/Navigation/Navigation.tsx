import React, {useEffect} from 'react';
import classes from './Navigation.module.css'
import Container from "../Container/Container";
import cn from "classnames";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {Category, categoryRequestAsync, categorySelector, changeCategory} from "../../store/category/categorySlice";
import {API_URL} from "../../consts";
import {productsRequestAsync} from "../../store/products/productsSlice";

const Navigation = () => {


    const {category, activeCategory} = useAppSelector(categorySelector)

    const dispatch = useAppDispatch()

    const handlerCategory = (index: number): void => {
        dispatch(changeCategory({
            indexCategory: index
        }))
    }

    useEffect(() => {
        dispatch(categoryRequestAsync())
    }, [])

    if (!category) {
        return <p>Загрузка данных...</p>
    }

    return (
        <nav className={classes["navigation"]}>
            <Container className={classes.container}>
                <ul className={classes.list}>

                    {
                        category.map((item, index:  number) => (
                            <li
                                key={item.title || ''}
                                onClick={() => handlerCategory(index)}
                                className={classes.item}
                            >
                                <button className={cn(classes.button,
                                    index === activeCategory ? classes.button_active : '')}
                                    style={{ backgroundImage: `url(${API_URL}/${item.image}`}}
                                >
                                    {item.rus}

                                </button>
                            </li>
                        ))
                    }

                </ul>
            </Container>
        </nav>
    );
};

export default Navigation;