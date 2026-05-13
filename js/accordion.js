const acc = document.getElementsByClassName("accordion");

const togglePanel = (accordion, button, panel) => {
  const isOpen = accordion.classList.contains("active");

  accordion.classList.toggle("active", !isOpen);
  accordion.classList.toggle("disactive", isOpen);

  panel.classList.toggle("hidden", isOpen);

  button.setAttribute("aria-expanded", String(!isOpen));
  panel.setAttribute("aria-hidden", String(isOpen));
};

for (let i = 0; i < acc.length; i++) {
  const accordion = acc[i];

  const button = accordion.querySelector(".accordion_Q");
  const panel = accordion.querySelector(".panel");

  if (!button || !panel) continue;

  button.setAttribute("aria-expanded", "false");
  panel.setAttribute("aria-hidden", "true");

  button.addEventListener("click", () => {
    togglePanel(accordion, button, panel);
  });

  button.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      togglePanel(accordion, button, panel);
    }
  });
}