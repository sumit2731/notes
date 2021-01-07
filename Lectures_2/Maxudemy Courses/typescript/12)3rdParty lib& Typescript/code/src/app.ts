import _ from 'lodash';
import {Product} from './product.model';
// import "reflect-metadata";
import { plainToClass } from "class-transformer";
import {validate} from 'class-validator';
/**
 * It says to typescript, dnt worry it will exist
 */
declare let GLOBAL: string;

console.log(_.shuffle([1,2,3]));
console.log(GLOBAL);

const products = [
    {title: 'A Carpet', price: 29.99},
    {title: 'A Book' , price: 10.99}
];

// const loadedProducts = products.map(product => new Product(product.title, product.price));

const loadedProducts = plainToClass(Product, products);

for(let product of loadedProducts) {
    console.log(product.getInformation());
}

const newProd = new Product('', -5);
validate(newProd).then((errors: any[]) => {
    if (errors.length > 0) {
        console.log("VALIDATION ERRORS!");
        console.log(errors);
    }
    else console.log(newProd);
});


function sumeetValidation(products: Product[]) {
    for(let product of products) {
        console.log(product.getInformation());
    }
}

sumeetValidation(products);