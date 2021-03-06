export type Entity = 
    |
        {
            type: "user";
        }
    |
        {
            type: "post";
        }
    |
        {
            type: "comment";
        };

/* 
How to get type which is union of values of another union

*/

type valuesogUnion = Entity["type"];

/* 
Using that union type in values of object also. here Entity type is used
    as value so it is allowed. here for using it as 
*/
type DerviedType2 = {
    [EntityType in Entity["type"]]: string
}

/* 
values of that object should also be derived from union type. here EntiTYType is genearted
    dynamically, if it is used as value i.e on right hand side, it's dynamic vaue will be used.
    if we need to use it on left side of expression we need to use [] with [k2 in k] syntax to 
    get dynamic value

*/

type DerviedType3 = {
    [EntityType in Entity["type"]]: {
        type: EntityType
    }
}

/* 
converting it into union type
*/

type DerviedType4 = {
    [EntityType in Entity["type"]]: {
        type: EntityType
    }
}[Entity["type"]]


/* 
Adding a property name

*/

type DerviedType5 = {
    [EntityType in Entity["type"]]: {
        type: EntityType
    } & Record<`${EntityType}Id`,string>
    
}[Entity["type"]]


let result:DerviedType5 = {
        type: 'comment',
        commentId: '123'

}

console.log(result);