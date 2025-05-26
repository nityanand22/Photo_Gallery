export default function FilterBar({ categories, selected, onSelect }) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`px-4 py-2 rounded-full text-sm font-semibold shadow-md ${
            selected === cat
              ? "bg-white text-pink-600"
              : "bg-pink-100 text-pink-800"
          } hover:bg-white transition`}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
