// shared.js — injects navbar and footer into every page

function getActivePage() {
  return window.location.pathname.split('/').pop() || 'index.html';
}

function injectNavbar() {
  const active = getActivePage();
  const links = [
    { href: 'index.html',    label: 'Home' },
    { href: 'about.html',    label: 'About Us' },
    { href: 'programs.html', label: 'Programs' },
    { href: 'gallery.html',  label: 'Gallery' },
    { href: 'news.html',     label: 'News' },
    { href: 'team.html',     label: 'Team' },
    { href: 'contact.html',  label: 'Contact' },
  ];
  const linksHTML  = links.map(l => `<a href="${l.href}" class="${active===l.href?'active':''}">${l.label}</a>`).join('');
  const mobileHTML = links.map(l => `<a href="${l.href}">${l.label}</a>`).join('');

  document.body.insertAdjacentHTML('afterbegin', `
    <div class="mobile-nav" id="mobileNav">
      <button class="mobile-nav__close" onclick="closeMobileNav()">✕</button>
      ${mobileHTML}
      <a href="donate.html" class="btn btn-red" style="margin-top:8px;">💛 Donate Now</a>
    </div>
    <nav class="navbar">
      <div class="navbar__inner">
        <a class="navbar__brand" href="index.html">
          <img src="assets/logo.jpg" alt="Youth Voice Uganda Logo" class="navbar__logo">
          <div class="navbar__name">Youth Voice <span>Uganda</span></div>
        </a>
        <div class="navbar__links">${linksHTML}</div>
        <a href="donate.html" class="btn btn-yellow navbar__cta">💛 Donate</a>
        <button class="hamburger" onclick="openMobileNav()" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  `);
}

function injectFooter() {
  document.body.insertAdjacentHTML('beforeend', `
    <footer class="footer">
      <div class="container">
        <div class="footer__grid">
          <div class="footer__brand">
            <img src="assets/logo.jpg" alt="Youth Voice Uganda">
            <p>Youth Voice Uganda (VOYU) is a community-based organisation advocating for youth and vulnerable groups on health, human rights, and economic livelihoods since 2019.</p>
            <p style="color:var(--yellow);font-style:italic;font-size:13px;">"Justifiable Society with Health and Economic Stability"</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About Us</a></li>
              <li><a href="programs.html">Programs</a></li>
              <li><a href="gallery.html">Gallery</a></li>
              <li><a href="news.html">News &amp; Updates</a></li>
              <li><a href="team.html">Our Team</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Our Programs</h4>
            <ul>
              <li><a href="programs.html#rights">Human Rights</a></li>
              <li><a href="programs.html#economic">Economic Training</a></li>
              <li><a href="programs.html#health">Health Programs</a></li>
              <li><a href="programs.html#adolescent">Adolescent Health</a></li>
              <li><a href="donate.html">Support Us</a></li>
            </ul>
          </div>
          <div class="footer__contact">
            <h4>Contact Us</h4>
            <p><span>📍</span>Latwol Cell, Padibe Town Council, Lamwo District, Uganda</p>
            <p><span>📞</span>+256 773 704 947 / +256 777 759 956</p>
            <p><span>✉️</span>youthvoiceuganda26@gmail.com</p>
            <p><span>🏛️</span>Reg. No: CBO L/CD/109972</p>
          </div>
        </div>
        <div class="footer__bottom">
          <p>© 2026 Youth Voice Uganda (VOYU). All rights reserved. Founded 5th July 2019.</p>
          <p style="color:rgba(255,255,255,0.35);">Lamwo District, Uganda </p>
          <p>Designed and miantained by <a href="mailto:okellostephen002@gmail.com">Okello Stephen</a></p>
        </div>
      </div>
    </footer>
  `);
}

function openMobileNav()  { document.getElementById('mobileNav').classList.add('open'); }
function closeMobileNav() { document.getElementById('mobileNav').classList.remove('open'); }

document.addEventListener('DOMContentLoaded', () => { injectNavbar(); injectFooter(); });
