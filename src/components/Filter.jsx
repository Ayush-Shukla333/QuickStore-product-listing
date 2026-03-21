function Filter({ categories, selected, onSelect }) {
  return (
    <select
      value={selected}
      onChange={(e) => onSelect(e.target.value)}
      className="w-full sm:w-auto px-4 py-2 rounded-xl border border-gray-200 bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition cursor-pointer"
    >
      <option value="">All Categories</option>
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
}

export default Filter;