export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <span className="brand-mark small">YJ</span>
          <span>조용준 · 한전KDN 사이버안전처 보안기술부</span>
        </div>
        <div className="copy">
          &copy; {new Date().getFullYear()} Yongjun Cho. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
