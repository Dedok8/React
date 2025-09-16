import useDebounce from "./useDebounce";

function Debounce() {
  const { debounceVal, handleChange } = useDebounce("", 500);
  return (
    <>
      <label>
        <input
          type="text"
          placeholder="Введіть данні"
          onChange={handleChange}
        />
      </label>

      <div>{debounceVal}</div>
    </>
  );
}

export default Debounce;
