import { type ReactNode } from "react";
import CourseGoals from "./CourseGoals";
import { type CourseGoal as CGoal } from "../App";
import InfoBox from "./InfoBox";

type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  if (goals.length == 0) {
    return (
      <InfoBox mode="hint">
        You have no course goals yet. Start adding some!
      </InfoBox>
    );
  }

  let warningBox: ReactNode;
  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="high">
        You're collecting lot of goals. Don't put too much on your plate
      </InfoBox>
    );
  }
  return (
    <>
      {warningBox}
      <article>
        <ul>
          {goals.map((goal) => (
            <li key={goal.id}>
              <CourseGoals
                id={goal.id}
                title={goal.title}
                onDelete={onDeleteGoal}
              >
                <p>{goal.description}</p>
              </CourseGoals>
            </li>
          ))}
        </ul>
      </article>
    </>
  );
}
