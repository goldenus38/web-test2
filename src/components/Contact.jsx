export default function Contact() {
  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <div className="contact-wrap">
          <div className="section-head">
            <span className="section-tag">CONTACT</span>
            <h2>연락처</h2>
            <p className="section-desc">
              협업 · 문의 · 프로젝트 제안 환영합니다.
            </p>
          </div>
          <div className="contact-card">
            <a className="contact-item" href="mailto:goldenus38@gmail.com">
              <div className="contact-icon">
                <i className="fa-regular fa-envelope"></i>
              </div>
              <div>
                <div className="contact-label">Email</div>
                <div className="contact-value">goldenus38@gmail.com</div>
              </div>
            </a>
            <a
              className="contact-item"
              href="https://github.com/goldenus38"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-icon">
                <i className="fa-brands fa-github"></i>
              </div>
              <div>
                <div className="contact-label">GitHub</div>
                <div className="contact-value">github.com/goldenus38</div>
              </div>
            </a>
            <div className="contact-item static">
              <div className="contact-icon">
                <i className="fa-solid fa-building-shield"></i>
              </div>
              <div>
                <div className="contact-label">소속</div>
                <div className="contact-value">
                  한전KDN 사이버안전처 보안기술부
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
