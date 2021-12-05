import { Item } from "./item";

export interface CartItem {
    //this is main item added in cart
    item: Item;
    /* 
    *This is quanity of main item added to cart
    */
    quanity: number;
    /* 
    In Case of main item it is main item + discouted item price, depends on quanity
    In Case of combo items this is price of 1 item after discount
    */
    calucatedPrice: number;
    //id, quanity
    freeItems?: CartItem[];
    discountedItems?: CartItem[];
}