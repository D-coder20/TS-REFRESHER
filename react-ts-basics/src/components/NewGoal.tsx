import { type FormEvent } from "react";
import { useRef } from "react";

type newGoalProps = {
  addGoal: (goal: string, summary: string) => void;
};

export default function NewGoal({ addGoal }: newGoalProps) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const enteredGoal = goal.current!.value; //current property will refer to the input element
    const enteredSummary = goal.current!.value;

    e.currentTarget.reset();

    addGoal(enteredGoal, enteredSummary);
  }
  return (
    <form onSubmit={submitHandler}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input id="goal" type="text" ref={goal}></input>
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input id="summary" type="text" ref={summary}></input>
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
