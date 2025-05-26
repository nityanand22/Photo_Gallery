# CollegeTips Photo Gallery

A modern, filterable photo and video gallery built with React and Tailwind CSS. Easily browse, filter, and view media in a beautiful modal viewer.

## Features

- **Filter by Category:** Instantly filter media by categories like Team Vibes, Creative Campaigns, Work Hard, Play Hard, and Behind-The-Scenes.
- **Image & Video Support:** Displays both images and videos in a responsive grid.
- **Modal Viewer:** Click any media to view it in a fullscreen modal with easy close functionality.
- **Responsive Design:** Looks great on all devices using Tailwind CSS.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/yourusername/college-tips-photo-gallery.git
   cd college-tips-photo-gallery
   ```

2. **Install dependencies:**

   ```sh
   npm install
   # or
   yarn install
   ```

3. **Add your images and videos:**

   - Place your image and video files in the `src/assets/` directory.
   - Update `src/assets/assets.js` to import and reference your media files.

4. **Start the development server:**

   ```sh
   npm run dev
   # or
   yarn dev
   ```

5. **Open in your browser:**
   - Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Project Structure

```
src/
  assets/
    assets.js        # Media data array
    pic1.jpg, ...    # Your images/videos
  components/
    Gallery.jsx      # Main gallery component
    FilterBar.jsx    # Category filter bar
    MediaItem.jsx    # Individual media item
    ModelViewer.jsx  # Modal viewer for media
  App.jsx
  main.jsx
```

## Customization

- **Add Categories:** Add new categories and media in `assets.js`.
- **Styling:** Modify Tailwind classes in the components for custom styles.
- **Media Types:** To add videos, import them in `assets.js` and set `type: "video"`.

## Dependencies

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [react-modal](https://github.com/reactjs/react-modal)
- [Vite](https://vitejs.dev/)

## License

MIT

---

**Made with ❤️ for CollegeTips**
