import { useEffect } from "react";
import "./styles.css";

const ObserverComponent = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            const timeoutId = entry.target.getAttribute("data-timeout-id");
            if (timeoutId) {
              clearTimeout(Number(timeoutId));
            }
          } else {
            const timeoutId = setTimeout(() => {
              entry.target.classList.remove("show");
            }, 1000);

            entry.target.setAttribute("data-timeout-id", String(timeoutId));
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((element) => observer.observe(element));

    return () => {
      hiddenElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return null;
};

export default ObserverComponent;
