/* 
Inputs -
*/

[ 
    { product: 'Apples', category: 'Fruit' },
  { product: 'Tomatos', category: 'Vegetables' },
  { product: 'Guava', category: 'Fruit' },
  { product: 'Avocados', category: 'Vegetables' },
  { product: 'Lettuce', category: 'Vegetables' },
  { product: 'Asparagus', category: 'Vegetables' },
  { product: 'Broccoli', category: 'Vegetables' },
  { product: 'Apricots', category: 'Fruit' },
  { product: 'Celery', category: 'Vegetables' },
  { product: 'Bananas', category: 'Fruit' },
  { product: 'Parsnip', category: 'Vegetables' },
  { product: 'Figs', category: 'Fruit' },
  { product: 'Fennel', category: 'Vegetables' },
  { product: 'Pears', category: 'Fruit' } 

]
[ 
  { product: 'Apples', sales: 863 },
  { product: 'Avocados', sales: 519 },
  { product: 'Celery', sales: 1657 },
  { product: 'Pears', sales: 1990 },
  { product: 'Bananas', sales: 608 },
  { product: 'Lettuce', sales: 1475 },
  { product: 'Parsnip', sales: 560 },
  { product: 'Pears', sales: 535 },
  { product: 'Pears', sales: 1090 },
  { product: 'Tomatos', sales: 1300 },
  { product: 'Broccoli', sales: 603 },
  { product: 'Figs', sales: 1127 },
  { product: 'Guava', sales: 1973 } 

]

/* 
count only that sale where sale > 500 and sale < 1500

expected - {vegetables: 4457 , Fruits: 4223}

*/

function jsql(productInfo, salesHistory) {
    console.log(productInfo);
    console.log(salesHistory);
    // write your code in JavaScript
    let productSalesDic = {}, catSales = {};
    for(let i = 0 ; i < salesHistory.length ; i++) {
        let currentSalesHistory = salesHistory[i];
        if(currentSalesHistory.sales >=500 && currentSalesHistory.sales <=1500) {
            productSalesDic[currentSalesHistory.product] = currentSalesHistory.sales;
        }
        
    }
    for(let product of productInfo) {
        
        
        let currenPrice = productSalesDic[product.product];
        if(currenPrice) {
            catSales[product.category] = (catSales[product.category] || 0) + currenPrice;
        } else {
            catSales[product.category] = catSales[product.category];
        }
        
    }
    console.log(catSales);
    return catSales;
};




