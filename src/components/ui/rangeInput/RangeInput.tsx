import style from "./RangeInput.module.css";
type props = {
  name: string;
  min: string;
  max: string;
  setMin: React.Dispatch<React.SetStateAction<string>>;
  setMax: React.Dispatch<React.SetStateAction<string>>;
};
export const RangeInput = ({ min, max, setMin, setMax, name }: props) => {
  return (
    <div className={style.rangeBlock}>
      <label>{name}</label>
      <input
        type="text"
        value={min}
        onChange={(e) => setMin(e.target.value)}
        className={style.rangeInput}
        name={"min" + name}
      />
      <span>-</span>
      <input
        type="text"
        value={max}
        onChange={(e) => setMax(e.target.value)}
        className={style.rangeInput}
        name={"max" + name}
      />
    </div>
  );
};
