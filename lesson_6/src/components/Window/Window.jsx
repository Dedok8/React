import useWindowSize from "./useWindowSize";

function Window() {
  const { width, height } = useWindowSize();
  let content;
  if (width > 1024) content = "Десктоп";
  else if (width > 786) content = "Планшет";
  else content = "телефон";
  return (
    <div>
      <p>{content}</p>
      <div>{`Width: ${width} - Height: ${height}`}</div>
    </div>
  );
}

export default Window;
