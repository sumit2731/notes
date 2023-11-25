import { useRef, type FormEvent } from "react";

type NewGoalProp = {
  onAddGoal: (goal: string, summary: string) => void;
};

const NewGoal = ({ onAddGoal }: NewGoalProp) => {
  /**
   * 3 overloads for useRef
   *
   * 1)when we give some initial value to useRef
   *    const flag = useRef(true)
   *
   *    flag.current will have type equal to type of value provided.
   *
   * 2)when we give some initial value and generic to useRef
   *    case 1 - Type of generic and initial value is same , then it is same as case 1.we can say generic here is redundant.
   *        const flag = useRef<boolean>(true)
   *    case 2 - Only one value is allowed whose type does not match with provided generic. that is null
   *        const flag = useRef<boolean>(null)
   *          here type if flag.current is null | boolean
   * 3)When no initial value is provided
   *    case 1 - generic is also not provided.
   *        const flag = useRef();
   *        generic also defaults to undefined, type of flag.current is undefined
   *    case 2 - generic is provided
   *        const flag = useRef<boolean>()
   *        type of flag.current is boolean is undefined.
   *
   *
   * ref prop to HTMLElement accepts ref which of type HTMLEement | null. so we specify null as initial value,
   * so that types match
   */
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  //   const handleFormSubmit = (event: FormEvent) => { //here type of element on which event happened would be HTMLElement
  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    /**
     * This will return a object whose key will be name attribute given to each form field
     * value will be value of that form field
     */
    //const formData = new FormData(event.currentTarget)

    /**
     * ! specifies that summary.current is not null
     */
    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;

    event.currentTarget.reset();
    onAddGoal(enteredGoal, enteredSummary);
  };
  return (
    // here ts is able to correclt guess the type  of event, you can use this to copy type correctly
    // <form onSubmit={(event) => event.preventDefault()}>
    <form onSubmit={handleFormSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input id="goal" type="text" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input id="summary" type="text" ref={summary} />
      </p>

      <button>Add Goal</button>
    </form>
  );
};

export default NewGoal;
