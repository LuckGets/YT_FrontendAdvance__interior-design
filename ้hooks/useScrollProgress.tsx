import { useState, useEffect } from "react";

export default function useScrollProgress() {
  const [completion, setCompletion] = useState(0);

  const updateScrollCompletion = () => {
    const currentProgress = window.scrollY;
    const scrollHeight = document.body.scrollHeight - window.innerHeight;

    if (scrollHeight) {
      setCompletion(Number((currentProgress / scrollHeight).toFixed(2)) * 100);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScrollCompletion);
    return () => window.removeEventListener("scroll", updateScrollCompletion);
  }, []);

  return completion;
}
