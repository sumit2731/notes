import {Item} from '../models/item';

export const Items:Item[] = [
    {
        id:1,
        name: 'coffee',
        price: 100,
        taxPercent: 18,
        desc: 'Item Description',
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
        price:10,
        taxPercent:10,
        desc: 'Item Description',
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
        price: 10,
        taxPercent: 10,
        desc: 'Item Description',
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
        desc: 'This is Item description'
    },
    {
        id: 5,
        name: 'sandwich',
        price: 10,
        taxPercent: 10,
        desc: 'This is Item description'
    },
    {
        id: 6,
        name: 'Mathi',
        price: 10,
        taxPercent: 10,
        desc: 'This is Item description'
    },
    {
        id: 7,
        name: 'Biscut',
        price: 10,
        taxPercent: 10,
        desc: 'This is Item description'
    },
    {
        id:8,
        name: 'Salad',
        price: 10,
        taxPercent: 10,
        desc: 'This is Item description'
    },
    {
        id: 9,
        name: 'burger',
        price: 10,
        taxPercent: 10,
        desc: 'This is Item description'
    },

    {
        id: 10,
        name: 'French Fries',
        price: 10,
        taxPercent: 10,
        desc: 'This is Item description'
    }
];