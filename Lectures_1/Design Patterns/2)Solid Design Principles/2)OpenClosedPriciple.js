/* 
Herew e will see Open Closed Principle,but also there is a bit of an added benefit here in that, in addition to looking 
  at OCP the open closed principle.I'm also going to show you one of the enterprise design pattern.Now this course isn't 
  about enterprise pattern.It's about the classic design pattern.But we are going to see one of those enterprise patterns 
  in this core.

Here we have product class, then we have a class that allow us to filter product by some criteria's.Now you're probably 
  wondering well hold on.Can't we just like take a function somewhere.Can't we just take a predicate and then do it 
  on the product.Well if you think about a Web site like Amazon they don't really let you filter on every single 
  criteria of an object.They only let you filter on some of them some predefined criteria and besides you know in the 
  real world filtering by same criteria can be optimized for example you can do some of the filtering on the GPU as 
  opposed to CPU this stuff like that.

We filter products by using these functions. see commented out code of old approach.

Now suppose that our boss comes back and the boss says Well can you please Aldo Phil also filter by size.So this is 
  ofcourse doable and we can go back to product filter and we can add another method ,filterBySize.

Now this is where we actually get to talk about the open closed principle. What is it all about.Well essentially the 
  open closed principle states that objects are open for extension closed for modification. So what do we mean by 
  extension what would do what do we mean by modification.
  
Well as soon as I jump into a productFilter and I start adding additional methods that's modification.I'm modifying a 
  class that might have already been tested might have already been deployed somewhere and I'm making changes to it. 
  This is considered not as good as actually.

by extension we mean a lot of things but typically we mean inheritance we mean that a class inherits from another class 
  and automatically acquires some of its field some of its members and then adds additional functionality. So the whole 
  idea of OCP the open closed principle is that this filter once it's defined once you add the filterByColor, you've 
  tested it you've put it into production you don't modify the class anymore

and we are breaking the open closed principle by adding another filter here because imagine well we put this filter into
  production and it gets tested it gets put into production and actually runs on the Web site and then the boss comes 
  back and the boss says Well can you also please filter by both sizes and color, So we we go ahead and we implement 
  filterBySizeAndColor.


So this isn't really a problem to write but if you think about this thing kind of scaling out what you're going to have 
  is something called the "State Space" explosion meaning that this this entire approach doesn't work to 
  infinity meaning that the boss can come back and say Can you please filter by size or color. So either the size matches 
  all the color matches.Imagine if you have instead of just having size and color you have three criteria and you want to 
  filter using the 'and' operator you want to filter by all combinations.That's going to need seven different methods.
  so this is practice. you need to have diffrent archiecture for this.

*/

let Color = Object.freeze({
  red: "red",
  green: "green",
  blue: "blue",
});

let Size = Object.freeze({
  small: "small",
  medium: "medium",
  large: "large",
  yuge: "yuge",
});

class Product {
  constructor(name, color, size) {
    this.name = name;
    this.color = color;
    this.size = size;
  }
}

class ProductFilter {
  filterByColor(products, color) {
    return products.filter((p) => p.color === color);
  }

  filterBySize(products, size) {
    return products.filter((p) => p.size === size);
  }

  filterBySizeAndColor(products, size, color) {
    return products.filter((p) => p.size === size && p.color === color);
  }

  // state space explosion
  // 3 criteria (+weight) = 7 methods

  // OCP = open for extension, closed for modification
}

let apple = new Product("Apple", Color.green, Size.small);
let tree = new Product("Tree", Color.green, Size.large);
let house = new Product("House", Color.blue, Size.large);

let products = [apple, tree, house];

//Old Approach to filter product

/* 
  let pf = new ProductFilter();
  console.log(`Green products (old):`);
  for (let p of pf.filterByColor(products, Color.green))
  console.log(` * ${p.name} is green`); 
  
*/

// ↑↑↑ BEFORE

// ↓↓↓ AFTER

/* 
*This is our new approach. THis is using "Specification Pattern". It is going to allow us to write something which is very 
  modular and very easy to work with.So what is the idea.The idea is that whenever you want to have a particular 
  filtering criteria you specify a separate class which defines that sort of filtering and that class is called a 
  specification.

  So for example for a color you can have a class called a ColorSpecification, it gets initialized by you specifying 
  what color you actually want to filter by and you have some sort of method like isSatisfied and this method gets
  called to make sure that a particular item which is fed into the specification actually satisfies whatever this 
  criterea is.

  Now you might think well this is a bit of an overkill.This is a bit too much perhaps for us to kind of construct 
  but the consequence is that now every single filter is untied from another.so 2 specifications are tied to each other.
  which means that hat if you need a new specification you don't modify any existing class you just make a new class 
  which also has a constructor which takes some criteria maybe and crucially it has and is satisfied method.

  it's used in a filter but we're going to build a better filter we're going to build a filter which
  is based on specifications. so we build 2 specifications and us ethem, see code.

  now we want green as well as large products, Now in order to implement this with the specification pattern what we 
  need to do is we need to build a combinator, Combinator is itself a specification which combines other specifications
  specifications.

  we use it to filter large and green products. so this is how we make add specification. in same way we can make
  or specification.

  So what is the takeaway from this entire lesson.Well first of all the idea of the open closed principle is that 
  classes are open for extension but close for modification meaning you never jump into any existing class and start 
  to modify it unless you absolutely have to , like a bug in there then yeah.

But doing it for extending functionality is not such a good thing because remember product filter is something that
  other people might have just copied your class wholesale and they're using it then you modified it but it doesn't 
  really affect their code because they just took a copy ,having something that has already been tested and that is
  into production  and then modifying it explicitly might not be the best idea.

In some cases is completely fine.In some cases if you are completely in control of your code and if there are no 
  heavy dependencies there, then there is really no problem in doing it.

But generally it's not such a great practice because it affects scalability it affects maintenance and scability.

So a better approach is to basically use use inheritance or use some sort of way of extending functionality.Now typically 
  in object oriented programming languages these specification classes would have some sort of base class where you would 
  have sort of base class , you will hve some dort of abstract class called specification.

now in in JavaScript obviously there is no abstract class.

But you could just force force it into constructed by making sure that if somebody calls the constructor, we throw an
  error.so we get other classes to extend specification thereby they all sort of become a specification in a way.

Unfortunately in JavaScript it's not really so strict meaning that if you forget to implement iSatisfy in child class
  it will call function in parent class and that's not a good thing.So in Javascript things are a bit different in 
  that there is no real need for a base class like specification.

You can just do away without it and use duck typing whenever you provide specifications to a filter for example.
  But generally the idea is that you use inheritance of some kind or at least you use this separation of concerns 
  effectively. you separate each each criteria by which you want to filter into a separate specification like a 
  ColorSpecification,SizeSpecification and then you can build Combinators out of them ,you can build large boolean 
  expressions out of these, and specification ,or specification definitions and then you can feed them into a filter
  which can subsequently process it better.So a filter which knows about specifications and knows about verifying them 
  internally.
*/

class Specification {
  
  constructor() {
    if(this.constructor.name == "Specification") {
      throw new Error("Specification is abstract");
    }
  }
  isSatisfied(item) {}
}


// general interface for a specification
class ColorSpecification {
  constructor(color) {
    this.color = color;
  }

  isSatisfied(item) {
    return item.color === this.color;
  }
}

class SizeSpecification {
  constructor(size) {
    this.size = size;
  }

  isSatisfied(item) {
    return item.size === this.size;
  }
}

class BetterFilter {
  filter(items, spec) {
    return items.filter((x) => spec.isSatisfied(x));
  }
}

// specification combinator
class AndSpecification {
  constructor(...specs) {
    this.specs = specs;
  }

  isSatisfied(item) {
    return this.specs.every((x) => x.isSatisfied(item));
  }
}

let bf = new BetterFilter();
console.log(`Green products (new):`);
for (let p of bf.filter(products, new ColorSpecification(Color.green))) {
  console.log(` * ${p.name} is green`);
}

console.log(`Large products:`);
for (let p of bf.filter(products, new SizeSpecification(Size.large))) {
  console.log(` * ${p.name} is large`);
}

console.log(`Large and green products:`);
let spec = new AndSpecification(
  new ColorSpecification(Color.green),
  new SizeSpecification(Size.large)
);
for (let p of bf.filter(products, spec))
  console.log(` * ${p.name} is large and green`);