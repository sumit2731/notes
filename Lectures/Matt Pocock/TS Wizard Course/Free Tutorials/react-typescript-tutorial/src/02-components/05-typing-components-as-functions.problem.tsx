import React from "react";

interface Props {
  className: string;
}

/**
 * Problem - we are not retirning a valid element from our component, so need to give our component a type, so that we get a error
 *  we does not return required type
 */


/* @ts-expect-error */
export const Button = (props: Props) => {
  return {
    ohDear: "123",
  };
};

const Parent = () => {
  return (
    <>
      <Button className="my-class"></Button>
    </>
  );
};
