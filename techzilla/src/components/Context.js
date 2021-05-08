import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "HP Laptop",
                "src": "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06539591.png?imwidth=75&imdensity=1",
                "description": "HP Laptop 15t-dy200 touch optional",
                "content": "Stay connected to what matters most with long-lasting battery life and a thin and portable, micro-edge bezel design. Built to keep you productive and entertained from anywhere, the HP 15 diagonal laptop features reliable performance and an expansive display - letting you stream, surf and speed through tasks.",
                "price": 679.99,
                "count": 1
            },
            {
                "_id": "2",
                "title": "HP Laptop",
                "src": "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06539646.png?imwidth=75&imdensity=1",
                "description": "HP Laptop 15t-dy200 touch optional",
                "content": "Stay connected to what matters most with long-lasting battery life and a thin and portable, micro-edge bezel design. Built to keep you productive and entertained from anywhere, the HP 15 diagonal laptop features reliable performance and an expansive display - letting you stream, surf and speed through tasks.",
                "price": 679.99,
                "count": 1
            },
            {
                "_id": "3",
                "title": "HP Laptop",
                "src": "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06539618.png?imwidth=75&imdensity=1",
                "description": "HP Laptop 15t-dy200 touch optional",
                "content": "Stay connected to what matters most with long-lasting battery life and a thin and portable, micro-edge bezel design. Built to keep you productive and entertained from anywhere, the HP 15 diagonal laptop features reliable performance and an expansive display - letting you stream, surf and speed through tasks.",
                "price": 679.99,
                "count": 1
            },
            {
                "_id": "4",
                "title": "HP Laptop",
                "src": "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06223235.png?imwidth=75&imdensity=1",
                "description": "HP Laptop 15t-dy200 touch optional",
                "content": "Stay connected to what matters most with long-lasting battery life and a thin and portable, micro-edge bezel design. Built to keep you productive and entertained from anywhere, the HP 15 diagonal laptop features reliable performance and an expansive display - letting you stream, surf and speed through tasks.",
                "price": 679.99,
                "count": 1
            },
            {
                "_id": "5",
                "title": "HP Laptop",
                "src": "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06539591.png?imwidth=75&imdensity=1",
                "description": "HP Laptop 15t-dy200 touch optional",
                "content": "Stay connected to what matters most with long-lasting battery life and a thin and portable, micro-edge bezel design. Built to keep you productive and entertained from anywhere, the HP 15 diagonal laptop features reliable performance and an expansive display - letting you stream, surf and speed through tasks.",
                "price": 679.99,
                "count": 1
            },
            {
                "_id": "6",
                "title": "HP Laptop",
                "src": "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06235866.png?imwidth=75&imdensity=1",
                "description": "HP Laptop 15t-dy200 touch optional",
                "content": "Stay connected to what matters most with long-lasting battery life and a thin and portable, micro-edge bezel design. Built to keep you productive and entertained from anywhere, the HP 15 diagonal laptop features reliable performance and an expansive display - letting you stream, surf and speed through tasks.",
                "price": 679.99,
                "count": 1
            }
        ],
        cart: [],
        total: 0
        
    };

    addCart = (id) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            this.setState({cart: [...cart,...data]})
        }else{
            alert("Added to cart successfully.")
        }
    };

    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
       
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };
    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }
   

    render() {
        const {products, cart,total} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal} = this;
        return (
            <DataContext.Provider 
            value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}


