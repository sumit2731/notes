/**
 * Rendering Multiple Components
 */
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => <li>{number}</li>);

<ul>{listItems}</ul>;

/**
 * A “key” is a special string attribute you need to include when creating lists of elements.
 * Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside
 * the array to give the elements a stable identity:
 *
 * The best way to pick a key is to use a string that uniquely identifies a list item among its siblings. Most often you would
 * use IDs from your data as keys:
 */

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    <li key={number.toString()}>{number}</li>
  ));
  return <ul>{listItems}</ul>;
}

/**
 * Extracting Components with Keys
 * Keys only make sense in the context of the surrounding array.
 *
 * A good rule of thumb is that elements inside the map() call need keys.
 */

//incorrect useage

function ListItem(props) {
  const value = props.value;
  return (
    // Wrong! There is no need to specify the key here:
    <li key={value.toString()}>{value}</li>
  );
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    // Wrong! The key should have been specified here:
    <ListItem value={number} />
  ));
  return <ul>{listItems}</ul>;
}

/**
 * Keys serve as a hint to React but they don’t get passed to your components. If you need the same value in your component,
 * pass it explicitly as a prop with a different name. With the example below, the Post component can read props.id, but not
 * props.key.
 */

const content = posts.map((post) => (
  <Post key={post.id} id={post.id} title={post.title} />
));

/**
 * Embedding map() in JSX.JSX allows embedding any expression in curly braces so we could inline the map() result:
 */

function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) => (
        <ListItem key={number.toString()} value={number} />
      ))}
    </ul>
  );
}
