import style from "./Pagination.module.css";
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
    <div className={style.pagBlock}>
      <button className={style.btnPagination} onClick={navigatePrev}>
        {"<"}
      </button>
      <span>
        {PAGES.map((item: number) => (
          <span
            className={item === currentPage ? style.active : style.page}
            key={item}
            onClick={() => setCurrentPage(item)}
          >
            {item}
          </span>
        ))}
      </span>
      <button onClick={navigateNext} className={style.btnPagination}>
        {">"}
      </button>
    </div>
  );
};
