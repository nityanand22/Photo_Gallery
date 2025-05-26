import Modal from "react-modal";

Modal.setAppElement("#root");

function ModelViewer({ media, onClose }) {
  return (
    <Modal
      isOpen={!!media}
      onRequestClose={onClose}
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4"
      overlayClassName="Overlay"
    >
      <div className="max-w-4xl w-full">
        {media.type === "image" ? (
          <img
            src={media.src}
            alt={media.title}
            className="w-full rounded-xl"
          />
        ) : (
          <video
            src={media.src}
            controls
            autoPlay
            className="w-full rounded-xl"
          />
        )}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full text-black font-bold"
        >
          ✖ Close
        </button>
      </div>
    </Modal>
  );
}

export default ModelViewer;
