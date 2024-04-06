import { ComponentPropsWithoutRef, FormEvent } from "react";

type FormProps = ComponentPropsWithoutRef<"form"> & {
  /**
   * Form can be wrapped around any element so we do not know what kind of data we will be getting here,
   * so we used unknown type
   */
  onSave: (value: unknown) => void;
};

const Form = ({ onSave, ...props }: FormProps) => {
  /**
   * see NewGoal.tsx, to see how to get this type correctly
   */
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    /**
     * we can data from induival field by data.get('inputNameProp')
     * data.get('name')
     */
    const formData = new FormData(event.currentTarget);
    // now we can access data like this -data.name
    const data = Object.fromEntries(formData);
    onSave(data);
  }
  return (
    <form onSubmit={handleSubmit} {...props}>
      {props.children}
    </form>
  );
};

export default Form;
