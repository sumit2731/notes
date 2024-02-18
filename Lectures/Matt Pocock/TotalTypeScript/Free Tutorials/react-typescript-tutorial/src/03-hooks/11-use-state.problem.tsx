import { useState } from "react";

export const Tags = () => {
  /**
   * tags variable is typed as a never array. Hovering over useState, we can see that it is being 
   * inferred as never array, because TypeScript infers an empty array as never array.
   * 
   * Inside of our component, the tags just don't work at all. It means that we're not getting inference 
   * on tag.id, tag.value, and we can't setTags here.
   * 
   * Your challenge is to figure out how we can make this useState understand that it's supposed typed as 
   * an array of objects with id of number and value of string.
   */
  const [tags, setTags] = useState([]);
  return (
    <div>
      {tags.map((tag) => {
        return <div key={tag.id}>{tag.value}</div>;
      })}
      <button
        onClick={() => {
          setTags([
            ...tags,
            {
              id: new Date().getTime(),
              value: "New",
            },
          ]);
        }}
      >
        Add Tag
      </button>
    </div>
  );
};