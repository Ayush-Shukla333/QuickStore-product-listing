function Spinner() {
  return (
    <div className="flex flex-col items-center justify-center h-64 gap-4">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-indigo-500 border-t-transparent" />
      <p className="text-sm text-gray-400">Loading products...</p>
    </div>
  );
}

export default Spinner;