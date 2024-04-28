import { useState } from "react";
import { Header } from "./components/Header";
import goalsImg from "./assets/goals.jpg";
/**
 * In vite project it is considered good practice to include tsx extension
 */
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export type CourseGoal = {
  id: number;
  title: string;
  description: string;
};

export default function App() {
  /**
   * When we do not give any value to useState. type of state inferred is undefined. as a result later we
   * cannot give it any other value
   *
   * However if we do give initial state then correct type is inferred by ts.
   *
   * however in case of arrays if we give empty array then type infered is never[]. so later later you cannot
   * assign any value. so we should give correct type to useState
   *
   * If we give generic type to useState but does provide initial value then state type will be-
   *  ProvidedType| undefined
   */
  //const [goals, setGoals] = useState([]);
  const [goals, setGoals] = useState<CourseGoal[]>([]);
  const handleAddGoal = (goal: string, summary: string) => {
    const newGoal: CourseGoal = {
      id: Math.random(),
      title: goal,
      description: summary,
    };
    setGoals((prevGoals) => [...prevGoals, newGoal]);
  };

  const handleDeleteGoal = (id: number) => {
    setGoals((goals) => goals.filter((goal) => !(goal.id !== id)));
  };
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      {/* <button onClick={handleAddGoal}>Add Goal</button> */}
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}
