let data = {
    "Fish": {
        "trout": {},
        "salmon": {}
    },

    "Tree": {
        "Huge": {
            "sequoia": {},
            "oak": {}
        },
        "Flowering": {
            "apple tree": {},
            "magnolia": {}
        }
    }
};

function generateTree(dataObject) {
    let ul = document.createElement('ul');
    for (let property in dataObject) {
        let li = document.createElement('li');
        li.innerHTML = property;
        if(Object.keys(dataObject[property]).length > 0) {
            li.append(generateTree(dataObject[property]));
        }
        ul.append(li);
    }
    return ul;
}
document.body.append(generateTree(data));