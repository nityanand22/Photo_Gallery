export default function MediaItem({ media, onClick }) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl shadow-glow group cursor-pointer"
      onClick={onClick}
    >
      {media.type === "image" ? (
        <img
          src={media.src}
          alt={media.title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
      ) : (
        <video
          src={media.src}
          muted
          loop
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          onMouseEnter={(e) => e.target.play()}
          onMouseLeave={(e) => e.target.pause()}
        />
      )}
      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-500">
        <p className="text-white font-semibold text-lg">{media.title}</p>
      </div>
    </div>
  );
}
