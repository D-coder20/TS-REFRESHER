import CourseGoals from "./CourseGoals";
import { type CourseGoal as CGoal } from "../App";

type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  return (
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
  );
}
