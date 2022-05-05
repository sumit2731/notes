
/* 
Given Type -

*/
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
            type: "commnet";
        };

/* 
Dervied Type

*/
type EntityWithId = 
    |
        {
            type: "user";
            userId: string;
        }
    |
        {
            type: "post";
            postId: string;
        }
    |
        {
            type: "commnet";
            commnetId: string;
        };

type EntityWithId2 = {
    [EntityType in Entity["type"]] : {
        type: EntityType
    }
}[Entity["type"]]