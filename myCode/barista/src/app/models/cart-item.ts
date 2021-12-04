import { Item } from "./item";

export interface CartItem {
    //this is main item added in cart
    item: Item;
    /* 
    *This is quanity of main item added to cart
    */
    quanity: number;
    /* 
    In Case of main item it is combo price
    In Case of combo items this is price after discount
    */
    calucatedPrice: number;
    //id, quanity
    freeItemsDetails?: CartItem[];
    discountedItems?: CartItem[];
}