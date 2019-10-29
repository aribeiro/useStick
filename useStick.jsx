import { useRef, useState, useEffect } from "react";

export function useStick(active, limit = 1) {
  const [sticky, setStick] = useState(active);
  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;

    function handleScroll() {
      if (!mountedRef.current) return;

      let scrollY = window.pageYOffset;
      if (scrollY > limit) {
        setStick(true);
      } else {
        setStick(false);
      }
    }

    window.addEventListener("scroll", handleScroll, true);
    return () => {
      mountedRef.current = false;
      window.removeEventListener("scroll", handleScroll);
    };
  }, [limit]);

  return [sticky];
}
