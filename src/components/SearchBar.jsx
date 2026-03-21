function SearchBar({ query, onSearch }) {
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => onSearch(e.target.value)}
      placeholder="Search products..."
      className="w-full sm:w-64 px-4 py-2 rounded-xl border border-gray-200 bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
    />
  );
}

export default SearchBar;