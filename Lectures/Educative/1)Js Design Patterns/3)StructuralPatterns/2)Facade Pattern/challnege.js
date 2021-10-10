/* 
In this challenge, you have to implement a part of an online hair product ordering system. The available products are shampoo,
conditioner, and hair serum. A customer who is shopping online can buy any of these. A product object has the following 
properties:

productName: name of the product, that is, shampoo, conditioner, or hair serum

amount: the number of bottles that the customer wants to buy

This system will allow a customer to buy an amount of product. If that amount is available in the inventory, a BuyProduct 
class instance should be initiated. If the amount is not available, a PreOrderProduct class instance should be initiated. The inventory will look like:

the amount of shampoo is: 20
the amount of conditioner is: 20
the amount of hair serum is: 1000

In the end, the customers should get a message that lets them know if they can buy that amount of bottles or will have to 
pre-order

*/

class Inventory{
    constructor(){
      this.shampoosAmount = 20
      this.conditionersAmount = 20
      this.hairSerumsAmount = 1000
  
    }
    checkInventory(product){
      let available = true;
      if(product.productName == "shampoo" && product.amount > this.shampoosAmount){
        available = false
        return available
      }
      else if(product.productName == "conditioner" && product.amount > this.conditionersAmount){
        available = false
        return available
      }
      else if(product.productName == "hair serum" && product.amount > this.hairSerumsAmount){
        available = false
        return available
    }
    return available
  }
  }
  
  class BuyingProduct extends Inventory {
    buyProduct(product) {
      let order;
      if(this.checkInventory(product)){
        order = new BuyProduct()
      }else{
        order = new PreOrderProduct()
      }
      return order.showDetails(product)
  }
  
  }
  
  class BuyProduct{
    showDetails(product){
      console.log(`${product.amount} bottles of ${product.productName} are available. Click on "buy" to purchase them.`)
    }
  }
  
  class PreOrderProduct{
    showDetails(product){
      console.log(`${product.amount} bottles of ${product.productName} are not available. You can Pre-order them on the next page.`)
    }
  }