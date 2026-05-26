const skills = [
  {
    icon: "fa-shield-virus",
    title: "보안관제 (SOC)",
    items: [
      "실시간 위협 모니터링 및 침해사고 대응",
      "이벤트 상관분석 및 룰 튜닝",
      "운영 프로세스 표준화",
    ],
  },
  {
    icon: "fa-server",
    title: "SIEM 운영 관리",
    items: [
      "로그 수집·정규화·인덱싱",
      "탐지 패턴 설계 및 운영",
      "대시보드 / 알림 체계 구성",
    ],
  },
  {
    icon: "fa-binoculars",
    title: "위협 탐지 / 분석",
    items: [
      "이상행위 패턴 분석",
      "웹 위·변조 모니터링",
      "인텔리전스 기반 탐지 룰 작성",
    ],
  },
  {
    icon: "fa-robot",
    title: "자동화 / 개발",
    items: [
      "보안 운영 자동화 스크립트",
      "웹 기반 관제 보조 서비스 개발",
      "API 연동 및 데이터 파이프라인 구성",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">SKILLS</span>
          <h2>스킬 &amp; 전문 분야</h2>
          <p className="section-desc">
            보안관제 운영을 중심으로 한 위협 탐지 · 분석 · 자동화 역량.
          </p>
        </div>
        <div className="skills-grid">
          {skills.map((s) => (
            <div className="skill-card" key={s.title}>
              <div className="skill-head">
                <i className={`fa-solid ${s.icon}`}></i>
                <h3>{s.title}</h3>
              </div>
              <ul>
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
