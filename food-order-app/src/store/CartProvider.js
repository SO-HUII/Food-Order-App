import React from 'react';
import CartContext from './cart-context';

// CartContext의 데이터 관리 및 그 컨텍스트에 접근하려는 모든 컴포넌트에 제공하는 것을 위한 컴포넌트
const CartProvider = (props) => {
    const addItemToCartHandler = item => {};

    const removeItemFromCartHandler = id => {

    };

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;