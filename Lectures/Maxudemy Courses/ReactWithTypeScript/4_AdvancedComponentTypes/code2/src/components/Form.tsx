import { ComponentPropsWithoutRef, FormEvent } from "react";

type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void;
};

const Form = ({ onSave, ...props }: FormProps) => {
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
