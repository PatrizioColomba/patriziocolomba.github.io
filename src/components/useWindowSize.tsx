import { useEffect, useState } from "react";

interface Size {
  width: number;
  height: number;
}

export default function useWindowSize() {
  const [size, setSize] = useState<Size>({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    if (window.addEventListener) {
      window.addEventListener(
        "resize",
        function () {
          setSize({ width: window.innerWidth, height: window.innerHeight });
        },
        true
      );
    } else {
      console.error("Cannot listen resize window event");
    }
  }, []);

  return size;
}
