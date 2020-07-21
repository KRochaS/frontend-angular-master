import { Cart } from '../models/cart.model';
import { CartItem } from '../models/cart-item.model';




export class CartUtil {

    public static get(): Cart {

        // Recupera os dados do LocalStorage
        const data = localStorage.getItem('petshopcart');

        // Caso não haja dados. retorna um novo carrinho
        if(!data) 
            return new Cart();

        // Caso haja dados retorna o carrinho
        return JSON.parse(data);
    }


    public static add(id: string, product: string, quantity: number, price: number, image: string ) {

        // Obtém o carrinho
        let cart = this.get();

        // gera o novo carrinho
        const item = new CartItem(id, product, quantity, price, image);

        // adiciona ao carrinho
        cart.items.push(item);


        // salva no localstorage
        localStorage.setItem('petshopcart', JSON.stringify(cart));


    }

    public static update(cart: Cart) {

        // salva no localstorage

        localStorage.setItem('petshopcart', JSON.stringify(cart));
    }


    public static clear() {
        localStorage.removeItem('petshopcart');
    }
}