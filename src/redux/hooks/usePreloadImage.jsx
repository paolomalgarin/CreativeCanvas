import { useEffect } from "react";

function usePreloadImage(url) {
  useEffect(() => {
    const preloadImage = (url) => {
      const img = new Image();
      img.src = url;
    };
  }, []);
}

export default usePreloadImage;