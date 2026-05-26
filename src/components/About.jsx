const items = [
  {
    icon: "fa-id-badge",
    title: "한전KDN 사이버안전처",
    desc:
      "보안기술부에서 SIEM 운영 관리, 위협 탐지 패턴 설계 및 자동화 도구 개발을 담당합니다.",
  },
  {
    icon: "fa-magnifying-glass-chart",
    title: "SIEM 운영 관리",
    desc:
      "보안 이벤트의 실시간 수집·분석·대응 체계를 운영하며, 탐지 정확도를 지속적으로 개선합니다.",
  },
  {
    icon: "fa-code",
    title: "보안 시스템 개발",
    desc:
      "웹 위변조 감시, 탐지 패턴 중계 등 보안 운영을 지원하는 서비스를 직접 개발·유지보수합니다.",
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">ABOUT</span>
          <h2>소개</h2>
          <p className="section-desc">
            보안관제 현장의 운영 경험과 데이터 기반 탐지 전략을 결합합니다.
          </p>
        </div>
        <div className="about-grid">
          {items.map((it) => (
            <div className="about-card" key={it.title}>
              <div className="about-icon">
                <i className={`fa-solid ${it.icon}`}></i>
              </div>
              <h3>{it.title}</h3>
              <p>{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
