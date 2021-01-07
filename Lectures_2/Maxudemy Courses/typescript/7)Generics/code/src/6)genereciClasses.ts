/* class DataStorage {
    
    private data = [];
    
    addItem(item) {
        this.data.push(item);
    }

    removeItem(item) {
        this.data.splice(this.data.indexOf(item),1);
    }

    getItems() {
        return [...this.data];
    }
} */
/* 
here we can have more than one generic type in class,
also you can have methods that have their own generic types
inside of classes. so you can introduce new generic types in class methods, if you
have some genric type that is needed only ina method not on whole class
*/
class DataStorage<T extends boolean | number | string> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

/* here we have assigned value to T, i.e string
now IDE will suggestions when you get ite from
textStorage
*/
const textStorage = new DataStorage<string>();
//we can only pass strig here, this is because of generics
textStorage.addItem("Sumeet");
textStorage.addItem("Sood");
textStorage.removeItem("Sumeet");
//infered type is string[], this is because of generics
let items = textStorage.getItems();

const numberStorage = new DataStorage<number>();
// we can pass number here, this is because of generics
numberStorage.addItem(1);
numberStorage.addItem(1);
//Infered type is number []
let numbers = numberStorage.getItems();

/* 
In same class
so we have full flexibility but we ts some extra information that makes
this both flexible and still strongly typed class, that's the whole idea
behind the generics
*/


/* const objectStorage = new DataStorage<object>();
objectStorage.addItem({name:"Sumeet"});
objectStorage.addItem({name:"Sood"});
 
// Because objects are refrence type, indexOf will return -1
// and this code will remove last item. so we do not want to allow
// objects. hence we use union type in generics

objectStorage.removeItem({name: "Sumeet"});
console.log(objectStorage.getItems()); */


/**
 * @Generic gives us flexibility with type safety
*/

/* 
We can also use the class without specifying the generic parameter. 
In that case,type of items6 will be unknown[]. here because of extends constraint
type is (boolean | number | string).

If we do not want to specify generic type we can use defualt value while defining
DataStorage -
 class DataStorage<T extends (boolean | number | string) = string>
  now even if we do not give generic type while calling construtor, it will be 
  interpret as string
*/