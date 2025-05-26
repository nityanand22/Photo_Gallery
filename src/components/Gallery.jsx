import { useState } from "react";
import FilterBar from "./FilterBar";
import MediaItem from "./MediaItem";
import ModelViewer from "./ModelViewer";

import mediaData from "../assets/assets.js";

const categories = ["All", ...new Set(mediaData.map((item) => item.category))];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedMedia, setSelectedMedia] = useState(null);

  const filteredMedia =
    selectedCategory === "All"
      ? mediaData
      : mediaData.filter((item) => item.category === selectedCategory);

  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      <h1 className="text-4xl font-bold text-white text-center mb-6 drop-shadow-lg">
        CollegeTips Photo Gallery
      </h1>

      <FilterBar
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {filteredMedia.map((media) => (
          <MediaItem
            key={media.id}
            media={media}
            onClick={() => setSelectedMedia(media)}
          />
        ))}
      </div>

      {selectedMedia && (
        <ModelViewer
          media={selectedMedia}
          onClose={() => setSelectedMedia(null)}
        />
      )}
    </div>
  );
}
