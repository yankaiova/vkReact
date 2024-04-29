import style from "./CardMovie.module.css";
type props = {
  children?: React.ReactNode;
  poster: string;
  handleClick?: () => void;
};
export const CardMovie = ({ children, poster, handleClick }: props) => {
  return (
    <div className={style.card} onClick={handleClick}>
      <img src={poster} alt="" className={style.cardMedia} />
      <div className={style.cardContent}>{children}</div>
    </div>
  );
};
