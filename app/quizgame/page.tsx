export default function Page() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-3xl font-bold font-heading">Quizzical</h1>
          <p className="py-6 text-base">
            A fun little quiz game built with Next.js, Tailwind CSS and DaisyUI.
          </p>
          <button className="btn btn-primary btn-md px-12 py-6 text-base rounded-2xl">Start Quiz</button>
        </div>
      </div>
    </div>
  );
}