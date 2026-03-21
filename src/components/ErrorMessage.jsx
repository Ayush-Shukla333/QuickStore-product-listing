function ErrorMessage({ message }) {
  return (
    <div className="flex flex-col items-center justify-center mt-24 gap-4">
      <span className="text-6xl">⚠️</span>
      <p className="text-lg font-semibold text-red-500">Something went wrong</p>
      <p className="text-sm text-gray-400">{message}</p>
      <button
        onClick={() => window.location.reload()}
        className="mt-2 px-6 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-xl transition"
      >
        Try again
      </button>
    </div>
  );
}

export default ErrorMessage;