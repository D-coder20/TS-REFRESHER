import CourseGoals from "./components/CourseGoals";
export default function App() {
  return (
    <main>
      {
        <CourseGoals
          title="Learn React + TS"
          description="Learn it from the ground up"
        />
      }
    </main>
  );
}
