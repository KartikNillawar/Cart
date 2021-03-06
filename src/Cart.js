import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
        const { products } = props;
        return (
            <div className="cart">
                {products.map((product) => {
                    return (
                    <CartItem 
                    product ={product} 
                    key={product.id}
                    onIncreaseQuantity = {props.onIncreaseQuantity}
                    onDecreaseQuantity = {props.onDecreaseQuantity}
                    onDeleteProduct = {props.onDeleteProduct}
                    />
                    );
                })}
            </div>
        );
}
/*
const arr = [1,2,3,4,5]
{ arr.map((item) =>{
                    return item+5;
                }) }
*/
export default Cart;