import React from 'react';
import Goods from "./Goods/Goods";
import classes from "./Order.module.css";

const orderList = ['Супер сырный', 'Картошка фри', 'Жгучий хот-дог'];
const Order = () => {
    return (
        <div className={classes.order}>
            <section className={classes.wrapper}>
                <div className={classes.header} role="button">
                    <h2 className={classes.title}>Корзина</h2>

                    <span className={classes.count}>4</span>
                </div>

                <div className={classes.wrap_list}>
                    <ul className={classes.list}>
                        {
                            orderList.map(item => <Goods title={item} />)
                        }

                    </ul>

                    <div className={classes.total}>
                        <p>Итого</p>
                        <p>
                            <span className={classes.amount}>1279</span>
                            <span className="currency">₽</span>
                        </p>
                    </div>

                    <button className={classes.submit}>Оформить заказ</button>

                    <div className={classes.apeal}>
                        <p className={classes.text}>Бесплатная доставка</p>
                        <button className={classes.close}>Свернуть</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Order;