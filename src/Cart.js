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
    handleIncreaseQuantity = (product) => {
        console.log('hey please increase the sty of ',product);
        const { products } = this.state;
        const index =  products.indexOf(product);
        products[index].qty +=1;
        this.setState({
            products
        })
    }
    handleDecreaseQuantity = (product) => {
        console.log('hey please increase the sty of ',product);
        const { products } = this.state;
        const index =  products.indexOf(product);
        if(products[index].qty === 0){
            return ;
        }
        products[index].qty -=1;
        this.setState({
            products
        })
    }
    handleDeleteProduct = (id) =>{
        const {products} = this.state;
        const items = products.filter((item) => item.id !== id);
        this.setState({
            products: items
        })
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
                    onIncreaseQuantity = {this.handleIncreaseQuantity}
                    onDecreaseQuantity = {this.handleDecreaseQuantity}
                    onDeleteProduct = {this.handleDeleteProduct}
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