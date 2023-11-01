import React,{ReactElement} from "react";

interface Props {
  className: string;
}

/* @ts-expect-error */


/**
 * We can give type as React.FC
 * but now if we try to give any type to prps we get a error. so need to give a generic type to React.FC
 */

/* export const Button: React.FC = (props) => {
  return (
    <div></div>
  );
}; */



/**
 * @Type is specified in generic.
 * 
 * Also now you get autocomplete for component proeprties like dislayNames, defaultvalues(soon going to be deprecared)
 * 
 * React.FC, in my eyes, is losing utility over time. I'm using it less and less. Really, I would probably just give type to my prop,this is
 * a little bit more ergonomic, just saying props, props like that, how can you beat that in terms of succinctness and conciseness?
  
  You do need to know about this because you'll probably see lots of code bases where this is written. I wouldn't refactor this 
  out of the code base if it's been consistently put in over time. React.FC, it's a useful tool in your toolkit. You're probably
  going to see it in the wild.
 */
export const Button: React.FC<Props> = (props: Props) => {
  return (
    <div></div>
  );
};

/**
 * @MySolution, we can also define component types like this, course one is better vecause it allows us to define
 *  other types like propTypes,contextTypes,defaultProps,displayName on component.
 * 
 * thing to be noticed is React.FC is not used as much today
 */
// export const Button  = (props: Props):ReactNode => {
//   return ( 
//   <div>Hello</div>
//   );
   
// };

const Parent = () => {
  return (
    <>
      <Button className="my-class"></Button>
    </>
  );
};
