import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <div className="container nav-wrap">
        <a href="#top" className="brand" onClick={close}>
          <span className="brand-mark">YJ</span>
          <span className="brand-text">조용준</span>
        </a>
        <nav
          ref={navRef}
          className={`nav${open ? " open" : ""}`}
          aria-label="주 메뉴"
        >
          <a href="#about" onClick={close}>소개</a>
          <a href="#skills" onClick={close}>스킬</a>
          <a href="#projects" onClick={close}>프로젝트</a>
          <a href="#contact" onClick={close}>연락처</a>
        </nav>
        <button
          className="nav-toggle"
          aria-label="메뉴 토글"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </header>
  );
}
