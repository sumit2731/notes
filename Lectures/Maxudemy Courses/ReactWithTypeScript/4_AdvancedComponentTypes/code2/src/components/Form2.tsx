import {
  Children,
  ComponentPropsWithoutRef,
  FormEvent,
  ReactNode,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";

type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void;
};

export type FormHandle = {
  clear: () => void;
};

/**
 * First generic is type that current Property of this ref will point to, second is type of prop
 */
const Form2 = forwardRef<FormHandle, FormProps>(({ onSave, ...props }, ref) => {
  const formRef = useRef<HTMLFormElement>(null);
  /**
   * This hook only works in component that also receives a forwarded ref,
   */
  useImperativeHandle(ref, () => ({
    clear() {
      console.log("Clear");
      formRef.current?.clear();
    },
  }));
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
    formRef.current?.reset();
  }
  return (
    <form ref={formRef} onSubmit={handleSubmit} {...props}>
      {props.children}
    </form>
  );
});

export default Form2;
