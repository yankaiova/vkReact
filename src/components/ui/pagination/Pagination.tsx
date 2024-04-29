type props = {
  currentPage: number;
  totalPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};
export const Pagination = ({
  currentPage,
  setCurrentPage,
  totalPage,
}: props) => {
  const PAGES = [...Array(totalPage + 1).keys()].slice(1);
  const navigatePrev = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const navigateNext = () => {
    if (currentPage !== totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <button
        style={{
          backgroundColor: "black",
          border: "1px solid white",
          borderRadius: "5px",
          color: "#fff",
        }}
        onClick={navigatePrev}
      >
        {"<"}
      </button>
      <span>
        {PAGES.map((item: number) => (
          <span style={item === currentPage ? { color: "red" } : {}} key={item}>
            {item}
          </span>
        ))}
      </span>
      <button
        onClick={navigateNext}
        style={{
          backgroundColor: "black",
          border: "1px solid white",
          borderRadius: "5px",
          color: "#fff",
        }}
      >
        {">"}
      </button>
    </div>
  );
};
