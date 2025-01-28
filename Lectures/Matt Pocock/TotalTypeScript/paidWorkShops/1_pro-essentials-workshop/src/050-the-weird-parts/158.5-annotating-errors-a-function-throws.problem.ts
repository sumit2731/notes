/**
 * How do we annotate the errors this function throws?
 *
 * How do we make this e typed as PossibleErrors?
 * Basically we want to tell consumers of our functions what types of errors this function
 * can throw.
 *
 */

type PossibleErrors = SyntaxError | DOMException;

const getUserFromLocalStorage = (id: string) => {
  const user = localStorage.getItem(id);
  if (!user) {
    return undefined;
  }

  return JSON.parse(user);
};

try {
  const user = getUserFromLocalStorage("user-1");
} catch (e) {}
