import { useState } from "react";

interface TagState {
  tagSelected: number | null;
  tags: { id: number; value: string }[];
}

/**
 * See Coiurse Video
 * In TypeScript, you are allowed to pass excess properties from the return values inside functions.
 * 
 * With the above in mind, when we pass a function to our setState call here, we're allowed to return excess 
 * properties within that setState.
 * The way to get around this is to type the function itself to returns TagState.Return Course notes.
 */

export const Tags = () => {
  const [state, setState] = useState<TagState>({
    tags: [],
    tagSelected: null,
  });
  return (
    <div>
      {state.tags.map((tag) => {
        return (
          <button
            key={tag.id}
            onClick={() => {
              setState(
                (currentState): TagState => ({
                  ...currentState,
                  // @ts-expect-error
                  tagselected: tag.id,
                })
              );
            }}
          >
            {tag.value}
          </button>
        );
      })}
      <button
        onClick={() => {
          setState(
            (currentState): TagState => ({
              ...currentState,
              tags: [
                ...currentState.tags,
                {
                  id: new Date().getTime(),
                  value: "New",
                  // @ts-expect-error
                  otherValue: "something",
                },
              ],
            })
          );
        }}
      >
        Add Tag
      </button>
    </div>
  );
};
