export interface Item {
    id: number;
    name: string;
    price: number;
    desc?: string;
    taxPercent: number;
    //this is doscount avalible on item, used in combos
    discountPercentage?: number; // need to be updated
    //id of items avalaible as free
    freeItems?:  {id: number, maxQty: number}[];
    //id,discountPercentage
    discountItems?: {id: number, discount: number, maxQty: number}[];
    //maxQuanity of item that can be added in cart
    maxQty?: number; // need to be updated
}