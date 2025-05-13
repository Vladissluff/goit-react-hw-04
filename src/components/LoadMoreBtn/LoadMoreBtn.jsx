

export default function LoadMoreBtn({ gallery, onClick }) {
  return (
    <button
      type="button"
      onClick={() => {
        onClick(gallery.quary, gallery.pagesLoaded + 1);
      }}>
      Load more
    </button>
  );
}