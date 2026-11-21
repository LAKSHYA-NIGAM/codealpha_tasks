  // Scroll to section on navbar item click
  document.querySelectorAll(".navbar ul li").forEach((item, index) => {
    item.addEventListener("click", () => {
      const sectionIds = ["hero-section", "about", "skills", "portfolio", "education", "contact"];
      const sectionId = sectionIds[index];
      const target = document.getElementById(sectionId) || document.querySelector(`.${sectionId}`);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Add active class on scroll
  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll(".navbar ul li");

  window.addEventListener("scroll", () => {
    let current = "";
    const scrollPosition = window.scrollY || window.pageYOffset || 0;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (scrollPosition >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navItems.forEach((li, index) => {
      li.classList.remove("active");
      const ids = ["hero-section", "about", "skills", "portfolio", "education", "contact"];
      if (ids[index] === current) {
        li.classList.add("active");
      }
    });
  });

  // Resume download tracking
  document.querySelector(".btn-primary")?.addEventListener("click", () => {
    console.log("Resume download initiated");
  });

  // Scroll icon
  document.querySelector(".scroll-icon")?.addEventListener("click", () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  });

  // Contact form submission with input validation
  document.querySelector("form")?.addEventListener("submit", function (e) {
    e.preventDefault();
    const inputs = this.querySelectorAll("input, textarea");
    const name = inputs[0]?.value || "";
    const email = inputs[1]?.value || "";
    const message = inputs[2]?.value || "";

    if (typeof validateContactForm === 'function') {
      const { isValid, errors } = validateContactForm({ name, email, message });
      if (!isValid) {
        const errorMsg = Object.values(errors).join("\n");
        alert("Please fix the following issues:\n" + errorMsg);
        return;
      }
    }
    alert("Thanks for your message, " + (name.trim() || "friend") + "! I'll get back to you soon.");
    this.reset();
  });
