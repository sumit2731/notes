//1)Smart function parameters

    //There are times when a function has many parameters, most of which are optional.

    function showMenu(title = "Untitled", width = 200, height = 100, items = []) {
        // ...
    }

    problem -
    
    // undefined where default values are fine
    showMenu("My Menu", undefined, undefined, ["Item1", "Item2"])

    Solution -

    function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
        // title, items – taken from options,
        // width, height – defaults used
        console.log( `${title} ${width} ${height}` ); // My Menu 200 100
        console.log( items ); // Item1, Item2
    }

    //now we can pass parameters in any order.


    //nested destucturing can also be used -


    let options = {
        title: "My menu",
        items: ["Item1", "Item2"]
    };

    function showMenu({
        title = "Untitled",
        width: w = 100,  // width goes to w
        height: h = 200, // height goes to h
        items: [item1, item2] // items first element goes to item1, second to item2
    }) {
    
    console.log( `${title} ${w} ${h}` ); // My Menu 100 200
    console.log( item1 ); // Item1
    console.log( item2 ); // Item2
    }

    showMenu(options);