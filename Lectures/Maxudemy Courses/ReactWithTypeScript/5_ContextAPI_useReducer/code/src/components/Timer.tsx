import { type Timer as TimerProps } from "../stores/timers-context.tsx";
import Container from "./UI/Container.tsx";

export default function Timer({ name, duration }: TimerProps) {
  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>{duration}</p>
    </Container>
  );
}
