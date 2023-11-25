import { type ReactNode, type PropsWithChildren, Component, FC } from "react";

type CourseGoalsProps = {
  id: number;
  title: string;
  children: ReactNode;
  onDelete: (id: number) => void;
};

/**
You will see both approaches out there in the wild in react and TypeScript projects
and whilst you will read a lot of opinions on that ,in the end it will come down to
your personal preference, which approach you prefer unless you are working on some
library which you plan on distributing to other developers,in which case you might
wanna prefer an interface because it's a bit more extensible
 */
interface CourseGoalsProps2 {
  id: number;
  title: string;
  children: ReactNode;
  /**
   * this is how we define property which is function is interface
   */
  onDelete(id: number): number;
}

/**
 * Second approach to pass children props
 */
type CourseGoalsProps3 = PropsWithChildren<{ title: string }>;

// export default function CourseGoal(props: {title: string}) {
export default function CourseGoal({
  id,
  title,
  children,
  onDelete,
}: CourseGoalsProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      {/* <button onClick={onDelete}>Delete</button> */}
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}

/**
 * Alternative to define component type
 * And that's simply another alternative syntax which you should know.There is no
 * better or worse syntax here. It really comes down to personal preference
 */
// const CourseGoal: FC<CourseGoalsProps> = ({ title, children }) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// };

// export default CourseGoal;
