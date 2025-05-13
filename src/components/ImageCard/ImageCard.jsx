
export default function ImageCard({ image, showImg = () => {}, bigImg }) {
  const {
    urls: { thumb: tinyImg },
    alt_description: alt,
  } = image;
  return (
    <div>
      <img
        onClick={() => showImg(image)}
        src={bigImg || tinyImg}
        alt={alt}
      />
    </div>
  );
}