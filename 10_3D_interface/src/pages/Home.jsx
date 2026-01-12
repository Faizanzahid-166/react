export default function Home() {
  return (
    <div className="flex flex-col items-center text-center max-w-xl">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to Your Dashboard
      </h1>

      <p className="text-gray-600 text-lg mb-8">
        This is your main home screen. Select an option from the sidebar to start navigating.
      </p>

      <div className="flex gap-4">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Get Started
        </button>

        <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
          Learn More
        </button>
      </div>
    </div>
  );
}
