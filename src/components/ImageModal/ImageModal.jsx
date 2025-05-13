import ImageCard from '../ImageCard/ImageCard';
import Modal from 'react-modal';

export default function ImageModal({ image, modalIsOpen, onClose }) {
  Modal.setAppElement('#modal');

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={onClose}
        contentLabel="Full image Modal">
        <p>
          Description: {image.description || image.alt_description}
        </p>
        <button
          onClick={onClose}
          aria-label="Close modal">
          x
        </button>
        <ImageCard image={image} bigImg={image.urls.regular} />
      </Modal>
    </>
  );
}