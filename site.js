// Shared header, menu, and footer for every page.
// To add, rename, or reorder a menu item, edit this list.
const MENU = [
  { label: "Welcome", href: "index.html" },
  { label: "People", href: "people.html" },
  { label: "Publications", href: "publications.html" },
  { label: "Research", href: "research.html" },
  { label: "Teaching", href: "teaching.html" },
  { label: "Software", href: "software.html" },
  { label: "Lab openings", href: "lab-openings.html" },
  { label: "Global Vegetation Project", href: "global-vegetation-project.html" },
];

(function () {
  const here = location.pathname.split("/").pop() || "index.html";
  const header = document.getElementById("site-header");
  header.className = "site-header";
  header.innerHTML = `
    <div class="wrap">
      <div class="brand-row">
        <a class="brand" href="index.html">
          <span class="brand-name">Laughlin Research Lab</span>
          <span class="brand-tag">pursuing the truth about plants</span>
        </a>
        <button class="menu-btn" aria-expanded="false" aria-controls="main-nav">Menu</button>
      </div>
      <nav class="main-nav" id="main-nav" aria-label="Main">
        <ul>${MENU.map((m) =>
          `<li><a href="${m.href}"${m.href === here ? ' aria-current="page"' : ""}>${m.label}</a></li>`).join("")}</ul>
      </nav>
    </div>`;

  const btn = header.querySelector(".menu-btn");
  const nav = header.querySelector(".main-nav");
  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
  });

  const footer = document.getElementById("site-footer");
  footer.className = "site-footer";
  footer.innerHTML = `<div class="wrap">© ${new Date().getFullYear()} Laughlin Research Lab, Department of Botany, University of Wyoming</div>`;
})();
