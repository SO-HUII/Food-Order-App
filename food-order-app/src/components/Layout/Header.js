import React, { Fragment } from 'react';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Meals make me Happy</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='테이블에 여러 음식들이 접시에 담겨 테이블을 채우고 있는 사진' />
            </div>
        </Fragment>
    );
};

export default Header;