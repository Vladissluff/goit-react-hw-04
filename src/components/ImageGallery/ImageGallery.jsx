import ImageCard from '../ImageCard/ImageCard';

export default function ImageGallery({ images, showImg, ref }) {
  return (
    <ul ref={ref}>
      {images.map((image, index) => (
        <li key={image.id + '-' + index}>
          <ImageCard image={image} showImg={showImg} />
        </li>
      ))}
    </ul>
  );
}