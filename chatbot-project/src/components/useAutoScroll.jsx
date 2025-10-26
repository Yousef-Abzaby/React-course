import { useRef, useEffect } from "react";

export function useAutoScroll(dependencies) {
  const dependencyRef = useRef(null);
  useEffect(() => {
    const containerElem = dependencyRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [dependencies]);
  return dependencyRef;
}
