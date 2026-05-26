const projects = [
  {
    icon: "fa-globe",
    tag: "Monitoring",
    title: "웹 위변조 감시 프로그램",
    desc:
      "대상 웹사이트의 콘텐츠 변경을 주기적으로 수집·비교하여 위·변조 의심 이벤트를 실시간으로 탐지·알림하는 운영 도구.",
    meta: ["변조 탐지 룰셋 운영", "알림 · 리포트 자동화", "운영 안정성 개선"],
  },
  {
    icon: "fa-tower-broadcast",
    tag: "Detection",
    title: "탐지 패턴 중계 웹서비스",
    desc:
      "탐지 룰·패턴을 부서·시스템 간에 통합 관리하고 배포하는 웹 기반 중계 플랫폼. 룰 변경 이력 추적과 배포 자동화 지원.",
    meta: ["패턴 버전 관리", "배포 자동화", "운영 가시성 강화"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">PROJECTS</span>
          <h2>주요 프로젝트</h2>
          <p className="section-desc">
            최근 수행한 보안 운영 기반 프로젝트입니다.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((p) => (
            <article className="project-card" key={p.title}>
              <div className="project-top">
                <div className="project-icon">
                  <i className={`fa-solid ${p.icon}`}></i>
                </div>
                <span className="project-tag">{p.tag}</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <ul className="project-meta">
                {p.meta.map((m) => (
                  <li key={m}>
                    <i className="fa-solid fa-circle-check"></i> {m}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
