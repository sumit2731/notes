/**
 * https://www.youtube.com/watch?v=nwSe95uFN8E
 */

type Event = "WINDOW_FOCUSED" | "WINDOW_BLURRED";

export const handleNewState = (event: Event) => {
  switch (event) {
    case "WINDOW_BLURRED":
      return {
        isFocused: false,
        latestUpdate: Date.now(),
      };
    case "WINDOW_FOCUSED":
      return {
        isFocused: true,
        latestupdate: Date.now(),
      };
  }
};

const newState = handleNewState("WINDOW_BLURRED");

/**
 * If return type of function is simple do not use return type
 * If your function has branches (if,switch and ternary) use retrune type
 * If you are writing library code then also use return type
 * If your function returns a complex object, then to have a perforce boost you can use rturn type
 */
