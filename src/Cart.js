import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{
    constructor(){
        super();
        this.state = {
            products: [
                {
                    price: 9999,
                    title: 'Mobile Phone',
                    qty: 1,
                    img: '',
                    id: 1
                },
                {
                    price: 9999,
                    title: 'watch',
                    qty: 1,
                    img: '',
                    id: 2
                },
                {
                    price: 9999,
                    title: 'laptop',
                    qty: 1,
                    img: '',
                    id: 3
                }
            ]
        }
        //this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    render(){
        const { products } = this.state;
        return (
            <div className="cart">
                {products.map((product) => {
                    return (
                    <CartItem 
                    product ={product} 
                    key={product.id}
                    />
                    );
                })}
            </div>
        );
    }
}
/*
const arr = [1,2,3,4,5]
{ arr.map((item) =>{
                    return item+5;
                }) }
*/
export default Cart;