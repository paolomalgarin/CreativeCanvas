import { useEffect } from "react";

function usePreloadImage(url) {
  useEffect(() => {
    const preloadImage = async (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => reject();
        img.src = url;
      });
    };

    if (url) {
      preloadImage(url)
        .then(() => {
          console.log(`Image ${url} preloaded successfully`);
        })
        .catch(() => {
          console.error(`Failed to preload image ${url}`);
        });
    }
  }, [url]);
}

export default usePreloadImage;