import React from 'react';
import logo from '../../assets/img/logo.svg'
import Container from "../Container/Container";
import classes from "./Header.module.scss";

const Header = () => {
    return (
        <header className={classes['header']}>
            <Container className={classes.container}>
                <img className={classes.logo} src={logo} alt="Логотип YourMeal" />

                    <div className={classes.wrapper}>
                        <h1 className={classes.title}>
                            <span>Только самые</span>
                            <span className={classes.red}>сочные бургеры!</span>
                        </h1>

                        <p className={classes.appeal}>Бесплатная доставка от 599₽</p>
                    </div>
            </Container>
        </header>
    );
};

export default Header;