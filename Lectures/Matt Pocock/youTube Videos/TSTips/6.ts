import React from "react";

//Write your own 'PropsFrom' helper to extract props from any React component

/* 
A common pattern in TypeScript is to create type helpers that allow you to extract types from things that are not types.
*/

//problem -
// const MyComponent = (props: { enabled: boolean }) => {
//   return null;
// };

// type PropsFrom<TComponent> = any;

// // we want proper type for PropsFrom component
// const props: PropsFrom<typeof MyComponent> = {
//   enabled: true,
// };
//solution

const MyComponent = (props: { enabled: boolean }) => {
  return null;
};

type PropsFrom<TComponent> = TComponent extends React.FC<infer Props>
  ? Props
  : TComponent extends React.Component<infer Props>
  ? Props
  : never;

// we want proper type for PropsFrom component
const props: PropsFrom<typeof MyComponent> = {
  enabled: true,
};
