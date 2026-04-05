export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">
      <h1 className="text-4xl font-bold">{"Pedro's Quiz Game"}</h1>
      <button className="btn btn-primary">Start Quiz</button>
      <button className="btn btn-secondary">View Scores</button>
      <button className="btn btn-accent btn-outline">Settings</button>
    </div>
  );
}