//Use 'in' operator to transform a union to another union - Using Entity Dervive EntityWithId.

export type Entity =
  | {
      type: "user";
    }
  | {
      type: "post";
    }
  | {
      type: "comment";
    };

// type EntityWithId =
//   | {
//       type: "user";
//       userId: string;
//     }
//   | {
//       type: "post";
//       postId: string;
//     }
//   | {
//       type: "comment";
//       commentId: string;
//     };

/**
 * as all types of union has a common property called 'type'
 * this gives the union type  - each type is value of 'type' key in each type
 */
type test = [Entity["type"]];

/**
 * While iterating , we can even use the iterating type as value
 */
type EntityWithId1 = {
  [EntityType in Entity["type"]]: {
    type: EntityType;
  };
};

/**
 * Using Record properties can be expression of iterating type
 */
type EntityWithId2 = {
  [EntityType in Entity["type"]]: {
    type: EntityType;
  } & Record<`${EntityType}Id`, string>;
};

type EntityWithId = {
  [EntityType in Entity["type"]]: {
    type: EntityType;
  } & Record<`${EntityType}Id`, string>;
}[Entity["type"]];
