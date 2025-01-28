type PossibleErrors = SyntaxError | DOMException;

const getUserFromLocalStorage = (
  id: string
):
  | {
      success: true;
      data: any;
    }
  | {
      success: false;
      error: SyntaxError | DOMException;
    } => {
  try {
    const user = localStorage.getItem(id);
    if (!user) {
      return {
        success: true,
        data: undefined,
      };
    }

    return {
      success: true,
      data: JSON.parse(user),
    };
  } catch (e) {
    if (e instanceof DOMException) {
      return {
        success: false,
        error: e,
      };
    }
    if (e instanceof SyntaxError) {
      return {
        success: false,
        error: e,
      };
    }
    throw e;
  }
};
/**
 * AS of now there is no way of annotating the error that function throws.
 * so we use return type for this. now user knows what type of errors user will be getting and how
 *  he can handle them.
 * now user knows that what type of errors this function can throw
 */
const user = getUserFromLocalStorage("user-1");

if (user.success) {
  user.data;
} else {
  user.error;
}
