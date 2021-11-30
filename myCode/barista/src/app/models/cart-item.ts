import { Item } from "./item";

export interface CartItem {
    //this is main item added in acrt
    item: Item;
    //this is qunaity of main item
    quanity: number;
    //id, quanity
    freeItemsDetails?: CartItem[];
    discountedItems?: CartItem[];
    //this is calucatedprice of this combo
    calucatedPrice: number;
}