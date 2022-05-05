export const fruitCounts = {
    apple: 1,
    pear: 4,
    banana: 26
};


type FruitCounts = typeof fruitCounts;


type DerivedTypes = {
    [T in keyof FruitCounts] : {
        [k1 in T] : number
    }
}[keyof FruitCounts];