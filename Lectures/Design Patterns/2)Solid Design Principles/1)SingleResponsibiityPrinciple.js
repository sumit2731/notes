/* 
it's a very simple principle because it tells you that a class should have a single primary responsibility and
 as a consequence it should only have one reason to change.that reason being somehow related to its responsibility
  in other words it's a bad idea to add more than one responsibiility to a class.

*/



const fs = require("fs");

/* 
Here everything is fine so far because the Journal was just handling its primary responsibility which is the keeping of 
    entries. it kind of makes sense that a journal is something that keeps entries. so you can add entries, you can 
    remove entries and that's pretty much it. but imagine that you decide that you also want to be able to save the 
    journal in file.where do you put this functionality ? where it might be really tempting for you to actually add 
    this functionality right into the journal itself. so we add save function.


So this is something that is going to work just fine but the problem is that subsequently you want to have additional 
    interaction with the file system, you might want to load from a file name you might want, so we add function load
     I'm not going to implement this but later on you might also want to load from somewhere else, so let's say you want
    to load  from your URL(loadFromUrl function) -specify the url and you load it from the web.

So the big problem with all of this is that you now added a second responsibility to the Journal class.


why is this a problem? Why can't we have a second responsibility?

    Well imagine you have some behaviors which are specific to serialization specific to the saving and
    writing of data.Let's suppose that instead of doing toString(), you want to remove those indices before you have the
    entry serialized.

    And let's suppose you also want to have some processing when you load them,  maybe you save them with the indices but 
    you load them without the indices.So you have some common operations which will be in all loadimh file operations.

    Now the problem with all of this is that imagine that a journal isn't the only object in your system.imagine that you 
    have to 10 different types that you want to serialize to files and load from files and maybe load from some URL.


How can you have common operations on all of these?

    And the answer is well it's going to be very difficult for you.So it might make sense to take all of these operations 
    related to persistence because that's what it is persistent stuff.You might want to take all of this stuff, remove 
    them from this class and just add them to a separate component that can subsequently be generalized for handling different
    types of objects not just journal entries but other things as well.So a good idea would be to take everything from here 
    and just make a separate class. so we come up with new class PersistenceManager.


*/

class Journal {
  constructor() {
    this.entries = {};
  }

  addEntry(text) {
    let c = ++Journal.count;
    let entry = `${c}: ${text}`;
    this.entries[c] = entry;
    return c;
  }

  removeEntry(index) {
    delete this.entries[index];
  }

  toString() {
    return Object.values(this.entries).join("\n");
  }

  // save(filename)
  // {
  //   fs.writeFileSync(filename, this.toString());
  // }
  //
  // load(filename)
  // {
  //   //
  // }
  //
  // loadFromUrl(url)
  // {
  //   //
  // }
}
Journal.count = 0;

/* 
Once again you could have a method here for pre processing the journal which would do something and
    you would apply this method uniformly across the entire persistence manager instead of having to hunt
    through lots and lots of classes modifying their serialization operations you just keep everything local
    so you keep everything right where you persistence functionality is.

So it it's better for organization and better for understanding what the code actually does and where the modifications
 need to happen.So you know that if your files are not being saved correctly you're not going to be looking in like 10
  different places you're going to be looking inside the persistence manager.


But the real takeaway here is what you see in the code that it's better to group functionality by class instead of sticking 
    all of the functionality into a single class for example.


In actual fact there is an antsy pattern and the anti pattern is like a pattern that shows up which is bad as opposed to good.
    There is a nasty pattern called a gold object a god object is basically like this one huge massive class that has lots 
    and lots and lots of responsibilities lots of spaghetti code very difficult to figure out.

So the single responsibility principle is the exact opposite of that is the idea that you basically

have to have just one responsibility and if you need additional responsibilities then just make other

classes they don't really cost you anything.

Another term that we use quite often use for this is called separation of concerns.
*/

class PersistenceManager {
  preprocess(j) {
    //
  }

  saveToFile(journal, filename) {
    fs.writeFileSync(filename, journal.toString());
  }
}

let j = new Journal();
j.addEntry("I cried today.");
j.addEntry("I ate a bug.");
console.log(j.toString());

let p = new PersistenceManager();
let filename = "c:/temp/journal.txt";
p.saveToFile(j, filename);

// separation of concerns
