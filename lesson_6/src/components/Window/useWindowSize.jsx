import { useEffect, useState } from "react";

function useWindowSize() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleSize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);
  return { width, height };
}

export default useWindowSize;
