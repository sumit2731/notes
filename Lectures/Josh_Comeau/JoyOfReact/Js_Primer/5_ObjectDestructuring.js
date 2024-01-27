/**
 * Some languages have "named arguments", where the developer can choose to label the arguments they're
 *  passing into a function.By supplying an object, we effectively have to label each value! This works
 * quite a lot like “named arguments” in other languages!
 */

/**
 * Renaming function parameters
 */

// Renames the `icon` prop so that it is accessed as `Icon`
// within the component:
function IconButton({ icon: Icon }) {
  console.log(Icon); // “ArrowRight” component
}

// Rendered as:
<IconButton icon={ArrowRight} />;

/**
 * Gotcha: argument must be provided.Even if you provides default value for all object properties,
 * still you need to provide it empty object as argument. in order to call it with no parameter,
 * provide default value for object
 *
 * giving default value to object argument
 */

function sendApiRequest({ method = "GET", numOfRetries = 5 } = {}) {
  // Stuff
}

sendApiRequest(); // ✅ No problem!
