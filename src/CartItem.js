import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            price: 9999,
            title: 'Mobile Phone',
            qty: 1,
            img: ''
        }
        //this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    increaseQuantity = () =>{
        //console.log('this',this.state)
        //this.state.qty +=1;
        //calling the set state we can trigger the rerender the function of our compnonent.
        //setstate form 1
        //this.setState({
        //    qty: this.state.qty + 1
        //})
        //we can use state form 1 one when we just want to change the title for ex.
        //we can use state form 2 one when we want to change the increase decrease for ex.
        //set state form 2
       this.setState((prevState) => {
           return {
               qty: prevState.qty + 1,
           }
       });
    }
    decreaseQuantity = () =>{
        const { qty } = this.state;
         
        if(qty == 0){
            return ;
        }
        //set state form 2 when prevstate required use this
       this.setState((prevState) => {
           return {
               qty: prevState.qty - 1,
           }
       });
    }
    render(){
        const{ price,title,qty } =this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={ {fontSize: 25} }>{title}</div>
                    <div style={ {color: '#777'} }>Rs {price}</div>
                    <div style={ {color: '#777'} }>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/*button*/}
                        <img alt="increase" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/png/512/992/992651.png" onClick={this.increaseQuantity}>
                        </img>
                        <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/png/512/992/992683.png" onClick={this.decreaseQuantity}>
                        </img>
                        <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/png/512/3096/3096673.png">
                        </img>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background : '#ccc'
    }
}

export default CartItem;