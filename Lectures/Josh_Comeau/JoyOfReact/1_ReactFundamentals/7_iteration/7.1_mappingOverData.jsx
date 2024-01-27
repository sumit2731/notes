const element = <div>{["one, two", "three"]}</div>;

/**
 * jsx to js converted (in normal usecases children all children are appended as separate argumnets)
 */
// prettier-ignore
const element2 = React.createElement(
    "div", 
    null, 
    ["one", "two", "three"]
);

//objected spitted by React.createElement

const element3 = {
  type: "div",
  key: null,
  props: {
    children: ["one", "two", "three"],
  },
  ref: null,
};

/**
 * So in the end one , two, three nodes are appened to div element
 */

const element4 = (
  <div>
    {[1, 2, 3].map((number) => (
      <div>{number}</div>
    ))}
  </div>
);

//jsx convertsion

const element5 = React.createElement(
  "div",
  null,
  [1, 2, 3].map((number) => React.createElement("div", null, number))
);

//react.create Element spits this out
const element6 = {
  type: "div",
  key: null,
  ref: null,
  props: {
    children: [
      {
        type: "div",
        key: null,
        ref: null,
        props: {
          children: 1,
        },
      },
      {
        type: "div",
        key: null,
        ref: null,
        props: {
          children: 2,
        },
      },
      {
        type: "div",
        key: null,
        ref: null,
        props: {
          children: 3,
        },
      },
    ],
  },
};

/**
 * That means if you pass array of anything to reactElement, It will be appended obe after other
 * to the main element. we use this to iterate over multiple element
 */
const data = [
  {
    id: "sunita-abc123",
    name: "Sunita Kumar",
    job: "Electrical Engineer",
    email: "sunita.kumar@acme.co",
  },
  {
    id: "henderson-def456",
    name: "Henderson G. Sterling II",
    job: "Receptionist",
    email: "henderson-the-second@acme.co",
  },
  {
    id: "aio-ghi789",
    name: "Aoi Kobayashi",
    job: "President",
    email: "kobayashi.aoi@acme.co",
  },
];

function App() {
  return (
    <ul>
      {data.map((contact) => (
        <ContactCard
          name={contact.name}
          job={contact.job}
          email={contact.email}
        />
      ))}
    </ul>
  );
}

/**
 * JSX inside JS inside JSX
 */

const element7 = (
  <ul>
    {items.map((item) => (
      <li>{item}</li>
    ))}
  </ul>
);
//this is converted to

React.createElement(
  "ul",
  {},
  items.map((item) => React.createElement("li", {}, item))
);
