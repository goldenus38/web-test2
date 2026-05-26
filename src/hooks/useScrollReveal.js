import { useEffect } from "react";

export default function useScrollReveal() {
  useEffect(() => {
    const selector =
      ".section-head, .about-card, .skill-card, .project-card, .contact-card, .hero-stats .stat";
    const targets = document.querySelectorAll(selector);
    targets.forEach((el) => el.classList.add("reveal"));

    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    targets.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);
}
