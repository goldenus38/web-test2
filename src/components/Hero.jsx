export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <span className="eyebrow">
          <i className="fa-solid fa-shield-halved"></i>
          CYBER SECURITY · SIEM OPERATIONS
        </span>
        <h1 className="hero-title">
          보안의 최전선에서<br />
          <span className="accent">데이터로 위협을 읽습니다</span>
        </h1>
        <p className="hero-sub">
          한전KDN 사이버안전처 보안기술부 · 조용준<br />
          보안관제 SIEM 운영 관리 및 위협 탐지 시스템 개발
        </p>
        <div className="hero-cta">
          <a className="btn btn-primary" href="#projects">
            <i className="fa-solid fa-folder-open"></i>
            프로젝트 보기
          </a>
          <a className="btn btn-ghost" href="#contact">
            <i className="fa-regular fa-envelope"></i>
            연락하기
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <div className="stat-num">SIEM</div>
            <div className="stat-label">보안관제 운영</div>
          </div>
          <div className="stat">
            <div className="stat-num">24/7</div>
            <div className="stat-label">위협 대응 체계</div>
          </div>
          <div className="stat">
            <div className="stat-num">2+</div>
            <div className="stat-label">주요 운영 시스템</div>
          </div>
        </div>
      </div>
    </section>
  );
}
