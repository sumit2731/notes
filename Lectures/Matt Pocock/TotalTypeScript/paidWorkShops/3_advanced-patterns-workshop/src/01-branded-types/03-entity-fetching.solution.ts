import { it } from "vitest";
import { Brand } from "../helpers/Brand";

type UserId = Brand<string, "UserId">;
type PostId = Brand<string, "PostId">;

interface User {
  id: UserId;
  name: string;
}

interface Post {
  id: PostId;
  title: string;
  content: string;
}

const db: { users: User[]; posts: Post[] } = {
  users: [
    {
      id: "1" as UserId,
      name: "Miles",
    },
  ],
  posts: [
    {
      id: "1" as PostId,
      title: "Hello world",
      content: "This is my first post",
    },
  ],
};

const getUserById = (id: UserId) => {
  /**
   * You can compare branded types to non branded types
   */
  return db.users.find((user) => user.id === id);
};

const getPostById = (id: PostId) => {
  return db.posts.find((post) => post.id === id);
};
/**
 *  I actually ran into this really hard when I was building a production application that had lots of
 * different entities with several different ways that you could access those entities by ID.
 *
 * There was a serializable version of the ID and a non-serializable version of the ID, because we were
 * saving it to local storage but still had to have some sort of sense of uniqueness when we were not
 * in local storage.
 *
 * Having functions like getBySerializableId or getByUniqueId, those were really interesting to have as
 * different branded types, because it meant that you couldn't accidentally access the wrong one.
 *
 * it's a really incredibly useful pattern to know, especially if you have complicated data structures
 * that all rely on each other and you don't want to accidentally mess things up.
 */
it("Should only let you get a user by id with a user id", () => {
  const postId = "1" as PostId;

  // @ts-expect-error
  getUserById(postId);
});

it("Should only let you get a post by id with a PostId", () => {
  const userId = "1" as UserId;

  // @ts-expect-error
  getPostById(userId);
});
