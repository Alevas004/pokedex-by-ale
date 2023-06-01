import "./PagesComponents.css"

export const PagesComponent = ({
  totalPages,
  onChangePage,
  onNextPage,
  onBackPage,
}) => {
  const pagesArray = Array(totalPages)
    .fill()
    .map((_, i) => i + 1);

  return (
    <div className="pages-btn">
      <button 
      className="back-btn"
      onClick={() => onBackPage()}>
        Last ball
      </button>

      {pagesArray.map((page) => (
        <button
          className="middle-btn"
          key={page}
          onClick={() => onChangePage(page)}
        >
          {page}
        </button>
      ))}

      <button 
      className="next-btn"
      onClick={() => onNextPage()}>
        Next ball
      </button>
    </div>
  );
};
