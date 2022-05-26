import React from 'react'
import { Component, createContext } from 'react'

export const Context = React.createContext();

// state: products(static), cart(array), total(0)
export class ContextProvider extends Component{
    state={
        products: [
            {
                _id: "1",
                title: "Mizon All In One Snail Repair Cream",
                src: "https://www.justinbeauty.net/Uploads/UrunResimleri/mizon-all-in-one-snail-repair-cream-sa-20090f.jpg",
                brand: "Mizon ",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                price: 45,
                count: 1,
            },
            {
                _id: "2",
                title: "Mizon Collagen 100",
                src: "https://www.justinbeauty.net/Uploads/UrunResimleri/mizon-collagen-100-kolajen-sikilastiri-1b-af7.jpg",
                brand: "Mizon ",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                price: 25,
                count: 1,  
              },
              {
                _id: "3",
                title: "Benton Cacao Moist and Mild Serum",
                src: "https://www.justinbeauty.net/Uploads/UrunResimleri/benton-cacao-moist-and-mild-serum-kaka-a5ee-0.jpg",
                brand: "Benton ",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                price: 35,
                count: 1,
            },
            {
                _id: "4",
                title: "Benton Snail Bee High Content Skin Deluxe",
                src: "https://www.justinbeauty.net/Uploads/UrunResimleri/benton-snail-bee-high-content-skin-del-aa-03c.jpg",
                brand: "Benton ",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                price: 40,
                count: 1,
            },
            {
                _id: "5",
                title: "Cosrx Advanced Snail 92 All In One Cream",
                src: "https://www.justinbeauty.net/Uploads/UrunResimleri/cosrx-advanced-snail-92-all-in-one-cre--bb52-.jpg",
                brand: "Cosrx ",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                price: 15,
                count: 1,
            },
            {
                _id: "6",
                title: "Benton Fermentation Essence",
                src: "https://www.justinbeauty.net/Uploads/UrunResimleri/benton-fermentation-essence-fermente-p-75-70d.jpg",
                brand: "Benton ",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                price: 28,
                count: 1,
            },
            {
                _id: "7",
                title: "Heimish Bulgarian Rose Water Mist Serum",
                src: "https://www.justinbeauty.net/Uploads/UrunResimleri/heimish-bulgarian-rose-water-mist-seru-fb2680.jpg",
                brand: "Aromatica ",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                price: 32,
                count: 1,
            },
            {
                _id: "8",
                title: "Huxley Brightly Ever After Essence",
                src: "https://www.justinbeauty.net/Uploads/UrunResimleri/thumb/huxley-brightly-ever-after-essence-bey--9ea4-.jpg",
                brand: "Huxley ",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                price: 50,
                count: 1,
            },
            {
                _id: "9",
                title: "Mizon Black Pearl Eye Gel Patch",
                src: "https://www.justinbeauty.net/Uploads/UrunResimleri/thumb/mizon-black-pearl-eye-gel-patch-siyah--062d37.jpg",
                brand: "Mizon ",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                price: 17,
                count: 1,
            },
            {
                _id: "10",
                title: "Benton Honest Eyelash Serum",
                src: "https://www.justinbeauty.net/Uploads/UrunResimleri/benton-honest-eyelash-serum-guclendiri-e-cd2d.jpg",
                brand: "Benton ",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                price: 25,
                count: 1,
            },{
                _id: "11",
                title: "Cosrx Propolis Light Cream",
                src: "https://www.justinbeauty.net/Uploads/UrunResimleri/cosrx-propolis-light-cream-besleyici-p-b4ac9c.jpg",
                brand: "Coxrx ",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                price: 65,
                count: 1,
            },{
                _id: "12",
                title: "Benton Deep Green Tea Lotion Deluxe",
                src: "https://www.justinbeauty.net/Uploads/UrunResimleri/benton-deep-green-tea-lotion-deluxe-ye-ab4744.jpg",
                brand: "Benton ",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                price: 29,
                count: 1,
            },
            
        ],
        cart:[],
        total:0,
    };

    // add product to cart
    addProduct = (id) => {
        const { products, cart } = this.state;
        const check = cart.every((item)=>{
            return item._id !== id;
        });
        if (check){
        const data = products.filter((product) =>{
            return product._id === id;
        })
        this.setState({ cart: [...cart, ...data]})
        } else{
        alert("The product has been added to cart.")
        }
    };

    // increase product
    increaseProduct = (id) => {
        const { cart } = this.state;
        cart.forEach((item) =>{
            if(item._id === id){
                item.count += 1;
            }
        });
        this.setState({cart: cart });
        this.getTotal();
    };

    // decrease product
    decreaseProduct = (id) =>{
        const { cart } = this.state;
        cart.forEach((item)=> {
            if(item._id === id){
                item.count === 1 ? (item.count = 1) : (item.count -= 1)
            }
        });
        this.setState({ cart: cart });
        this.getTotal();
    }

    // delete product
    // splice syntax:
    //      array.splice(index(required, the position to add/remove items), howmany(optional), item1,..,itemx(optional))
    deleteProduct = (id) =>{
        if(window.confirm("Are you sure you want to delete this product?")){
            const { cart } = this.state;
            cart.forEach((item, index)=>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            });
            this.setState({ cart: cart });
            this.getTotal();
        }
    };

    // getTotal
    //  reduce syntax:
    //      array.reduce(function(total(initialValue), currentValue, currentIndex, arr), initialValue)
    getTotal = (id) =>{
        const { cart } = this.state;
        const all = cart.reduce((initialValue, item) =>{
            return initialValue + item.price * item.count;
        }, 0);
        this.setState({total: all});
    };

    // localStorage.getItem(keyName)
    // localStorage.setItem(keyName, keyValue)
    // JSON.stringfy: js object to string
    // JSON.parse: js object to string

    // once setItem ile dataCart ve dataTotal set ediyoruz
    componentDidUpdate(){
        localStorage.setItem("dataCart", JSON.stringify(this.state.cart))
        localStorage.setItem("dataTotal", JSON.stringify(this.state.total))
    };

    // sonra getItem ile
    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem("dataCart"));
        if (dataCart !== null){
            this.setState({ cart: dataCart });
        }
        const dataTotal = JSON.parse(localStorage.getItem("dataTotal"));
        if (dataTotal !== null){
            this.setState({ total: dataTotal});
        }
    };

    render(){
        const { products, cart, total } = this.state;
        const { addProduct, decreaseProduct, increaseProduct, deleteProduct, getTotal } = this;
        return(
            <Context.Provider value={{products, cart, total, addProduct, decreaseProduct, increaseProduct, deleteProduct, getTotal}}>
                {this.props.children}
            </Context.Provider>
        )
    };
}
export default ContextProvider;

