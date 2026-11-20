document.addEventListener("DOMContentLoaded", function () {
   // 1. EDIT YOUR MENU HERE (Add, remove, or reorder pages in one place)
   const navItems = [
       { name: "Home", url: "index.html" },
       { name: "Services & Repairs", url: "services.html" },
       { name: "Core Exchange", url: "core-exchange.html" },
       { name: "Request Service", url: "request.html" },
       { name: "Sell / Trade-In", url: "sell.html" },
       { name: "Gallery", url: "gallery.html" },
       { name: "Warranty", url: "warranty.html" },
       { name: "Reviews", url: "reviews.html" },
       { name: "DIY / Parts", url: "diy-resources.html" },
       { name: "Contact Us", url: "contact.html" }
   ];
   // 2. Detect the current page so we can auto-highlight the active link
   const currentPage = window.location.pathname.split("/").pop() || "index.html";
   // Build the <li> links
   const linksHTML = navItems.map(item => {
       const isActive = (currentPage === item.url) ? ' class="active"' : '';
       return `<li><a href="${item.url}"${isActive}>${item.name}</a></li>`;
   }).join("");
   // 3. Inject the header into the page
   const headerElement = document.getElementById("site-header");
   if (!headerElement) return;
   headerElement.innerHTML = `
<div class="container">
<a href="index.html" class="logo">
<img src="images/logo.png" alt="512 Controller Clinic Logo">
</a>
<div class="menu-toggle" id="menuToggle">&#9776;</div>
<nav id="mainNav">
<ul>
                   ${linksHTML}
</ul>
</nav>
</div>
   `;
   // 4. Wire up the hamburger menu toggle
   const menuToggle = document.getElementById("menuToggle");
   const mainNav = document.getElementById("mainNav");
   menuToggle.addEventListener("click", function () {
       mainNav.classList.toggle("open");
       menuToggle.innerHTML = mainNav.classList.contains("open") ? "&#10005;" : "&#9776;";
   });
   const navLinks = mainNav.querySelectorAll("a");
   navLinks.forEach(link => {
       link.addEventListener("click", function () {
           mainNav.classList.remove("open");
           menuToggle.innerHTML = "&#9776;";
       });
   });
});
