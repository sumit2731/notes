/**
 * When we render array as children of some react element, we get key warning.
 *
 * The purpose of a key is to uniquely identify each React element.
 * we need keys for performance and avoid some bugs(In the case of state components).
 * They help understand react how the data shifts over time
 */

/**
 * @key is not avalible inside component code to access
 * there are a small number of “reserved words” in React. key is one of these special terms.
 * When we apply a key to a React element, we're not actually setting it as a prop.
 *
 * So you cannot access key as normal prop in react
 */

const element = (
  <ContactCard
    key="sunita-abc123"
    name="Sunita Kumar"
    job="Electrical Engineer"
    email="sunita.kumar@acme.co"
  />
);
//jsx to js conversion

const element2 = React.createElement(ContactCard, {
  key: "sunita-abc123",
  name: "Sunita Kumar",
  job: "Electrical Engineer",
  email: "sunita.kumar@acme.co",
});

//react Element - here key is not part of prop

const element3 = {
  type: ContactCard,
  key: "sunita-abc123",
  props: {
    name: "Sunita Kumar",
    job: "Electrical Engineer",
    email: "sunita.kumar@acme.co",
  },
};

/**
 * @ReactElements -  React elements are JavaScript objects that describe a thing that React
 * needs to create. In this case, the element describes a ContactCard component that needs
 * to be rendered.
 *
 * When we write jsx it is converted to js (React.createElement)
 * React.createElement returns the react element(this is object which tells react what to render
 * on UI)
 *
 * Keys identify a particular React element. It's a property of the element itself, not
 * something that needs to be passed along to the component!
 *
 * For now, the important thing to understand is this: key looks like a prop, but it's a special
 * thing that React uses to identify React elements.
 */

/**
 * @KeyRules
 *
 * 1)Should be applied to top level react element which is used inside loop.
 *  When using ReactFragments, sometimes we need to switch to long form so that
 *  we can specify the key attribute there
 */

// 🚫 Missing key:
function Thing({ data }) {
  return data.map((item) => (
    <>
      <p>{item.content}</p>
      <button>Cancel</button>
    </>
  ));
}

// ✅ Fixed!
function Thing({ data }) {
  return data.map((item) => (
    <React.Fragment key={item.id}>
      <p>{item.content}</p>
      <button>Cancel</button>
    </React.Fragment>
  ));
}
/**
 * 2)Not Global Unique - keys needs to Be unique only in there array
 *
 * For example, this is totally valid:
 */

//Each .map() call produces a separate array, and so there's no problem.
function App() {
  return (
    <ul>
      {data.map((contact) => (
        <ContactCard
          key={contact.id}
          name={contact.name}
          job={contact.job}
          email={contact.email}
        />
      ))}
      {data.map((contact) => (
        <ContactCard
          key={contact.id}
          name={contact.name}
          job={contact.job}
          email={contact.email}
        />
      ))}
    </ul>
  );
}
