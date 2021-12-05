import {Item} from '../models/item';

export const Items:Item[] = [
    {
        id:1,
        name: 'coffee',
        price: 100,
        taxPercent: 18,
        desc: '10 pcs of mini cocktail pubjabi aloo samosa bucket, 10 pcs of cocktail chicken keema samosa bucket and 2 beverages of your choice. ',
        freeItems: [
            {
                id: 4,maxQty: 2
            },
            {
                id: 7, maxQty: 2
            }
        ],
        discountItems : [
            {
                id: 5, discount: 20, maxQty: 2
            }
        ]
    },
    {
        id: 2,
        name: 'tea',
        price:100,
        taxPercent:10,
        desc: '10 pcs of mini cocktail pubjabi aloo samosa bucket, 10 pcs of cocktail chicken keema samosa bucket and 2 beverages of your choice. ',
        freeItems: [
            {
                id: 4,maxQty: 2
            },
            {
                id: 7, maxQty: 2
            }
        ],
        discountItems : [
            {
                id: 6, discount: 20, maxQty: 1
            }
        ]
    },
    {
        id: 3,
        name: 'juice',
        price: 150,
        taxPercent: 10,
        desc: '10 pcs of mini cocktail pubjabi aloo samosa bucket, 10 pcs of cocktail chicken keema samosa bucket and 2 beverages of your choice. ',
        discountItems : [
            {
                id: 8,
                discount: 30,
                maxQty: 1
            }
        ]
    },
    {
        id: 4,
        name: 'cookies',
        price: 10,
        taxPercent: 10,
        desc: '10 pcs of mini cocktail pubjabi aloo samosa bucket, 10 pcs of cocktail chicken keema samosa bucket and 2 beverages of your choice. '
    },
    {
        id: 5,
        name: 'sandwich',
        price: 70,
        taxPercent: 10,
        desc: '10 pcs of mini cocktail pubjabi aloo samosa bucket, 10 pcs of cocktail chicken keema samosa bucket and 2 beverages of your choice. '
    },
    {
        id: 6,
        name: 'Mathi',
        price: 15,
        taxPercent: 10,
        desc: '10 pcs of mini cocktail pubjabi aloo samosa bucket, 10 pcs of cocktail chicken keema samosa bucket and 2 beverages of your choice. '
    },
    {
        id: 7,
        name: 'Biscut',
        price: 10,
        taxPercent: 10,
        desc: '10 pcs of mini cocktail pubjabi aloo samosa bucket, 10 pcs of cocktail chicken keema samosa bucket and 2 beverages of your choice. '
    },
    {
        id:8,
        name: 'Salad',
        price: 60,
        taxPercent: 10,
        desc: '10 pcs of mini cocktail pubjabi aloo samosa bucket, 10 pcs of cocktail chicken keema samosa bucket and 2 beverages of your choice. '
    },
    {
        id: 9,
        name: 'burger',
        price: 70,
        taxPercent: 10,
        desc: '10 pcs of mini cocktail pubjabi aloo samosa bucket, 10 pcs of cocktail chicken keema samosa bucket and 2 beverages of your choice. '
    },

    {
        id: 10,
        name: 'French Fries',
        price: 90,
        taxPercent: 10,
        desc: '10 pcs of mini cocktail pubjabi aloo samosa bucket, 10 pcs of cocktail chicken keema samosa bucket and 2 beverages of your choice. '
    }
];