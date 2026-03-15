import { imagesToDOM } from "./onboard_assets";

const landing_page = document.getElementById("landing_page") as HTMLDivElement;
const explore_btn = document.getElementById("explore_btn") as HTMLButtonElement;

explore_btn.addEventListener("click", () => {
  // force all views to render on GPU
  requestAnimationFrame(() => {
    document.querySelectorAll(".view").forEach((v) => {
      (v as HTMLElement).style.transform = "translateZ(0)";
      console.log("pre rendered");
    });
  });

  imagesToDOM();
  explore_btn.disabled = true;
  explore_btn.classList.add("pulse");
  landing_page.classList.remove("load");
  setTimeout(() => {
    landing_page.classList.add("unload");
    window.appState.currentPage = "aboutView";
  }, 1700);
});
