class Perso {
    name = 'sumeet';
}

function createInstance<T>(constructor: {new() : T}): T {
    return new constructor();
}


function createInstance2<T>(constructor: new() =>T ):T {
    return new constructor;
}

let person1 = createInstance2(Perso);
person1.name
