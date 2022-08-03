import React, { useState, useMemo, useEffect } from "react";
import orderBy from "lodash/orderBy";



const Item = ({ country }) => {
  // console.info('Item re-render');

  return <button className={`country-item`}>{country.name}</button>;
};

const ItemMemo = React.memo(Item);

const Measure = ({ before }) => {
  const now = performance.now();

  const result = now - before;

  console.info("Overall performance: ", result);
  return <>{result}</>;
};

const List = ({
  countries,
  before
}) => {
  const [sort, setSort] = useState("asc");

  const sortedCountries = orderBy(countries, "name", sort);
  console.info("Array sorting perf: ", performance.now() - before);

  const button = (
    <button onClick={() => setSort(sort === "asc" ? "desc" : "asc")}>
      toggle sorting: {sort}
    </button>
  );

  return (
    <>
      {button}
      <div>
        {sortedCountries.map((country) => (
            <Item country={country} key={country.id} />
        ))}
      </div>
     
    </>
  );
};

const List2 = ({ countries,before }) => {
  
  const [sort, setSort] = useState("asc");
  
  const sortedCountries = orderBy(countries, "name", sort);
  
  console.info("Array sorting perf: ", performance.now() - before);
  
  const content = useMemo(() => {
    const sortedCountries = orderBy(countries, 'name', sort);

    return sortedCountries.map((country) => <Item country={country} key={country.id} />);
  }, [countries, sort]);

  return content;
};

export const Page = ({ countries }) => {
  const [count, setCount] = useState(1);
  const [remount, setRemount] = useState(1);

  const before = performance.now();

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>re-render: {count}</button>
      <button onClick={() => setRemount(remount + 1)}>
        re-mount: {remount}
      </button>
      <List countries={countries} key={remount} before={before} />
      <Measure before={before} />
    </div>
  );
};
