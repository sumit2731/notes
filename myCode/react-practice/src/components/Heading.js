export const Heading = ({ color, bg}) => {
  color = color || 'red';
  bg = bg || 'black';
  return (
    <h1 style= {{color, backgroundColor:bg}}>
      Hello
    </h1>
  );
};
